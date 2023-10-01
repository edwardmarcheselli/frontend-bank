import React from 'react';
import Card from "../components/card";
import UserContext  from "../context/usercontext";
import SubmissionContext  from "../context/submissioncontext";

const ATMDeposit = ({ onChange, isValid}) => {
  return (
    <div className='container'>
      <div className="row">
        <div className='col'>
          <input id="number-input" className="form-control" type="input" onChange={onChange}></input>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          <input type="submit" className="btn btn-light" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
        </div>
      </div>
    </div>
  );
};

function Deposit(){
  const [deposit, setDeposit] = React.useState(0);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [user, setUser] = React.useState(0);
  const [show, setShow]         = React.useState(false);
  const [status, setStatus]     = React.useState('');

  const ctx = React.useContext(UserContext); 
  const subctx = React.useContext(SubmissionContext);

  let usersList = ctx.users.map((item, index) => {
    return (
      <option value={index} key={1+index} eventkey={1+index}>{item.name}</option>
    );
  });

  const handleChange = (event) => {
    setShow(false);
    console.log(`inputChange ${event.target.value}`);
    if (!validate(!containsLetter(event.target.value.toString()),     'Value cannot contain letters')){
      setValidTransaction(false);
      return
    };
    if (!validate(Number(event.target.value) >= 0,     'Must be a positive value')){
      setValidTransaction(false);
      return
    };
    if (!event.target.value){
      setValidTransaction(false);
      return
    };
    setValidTransaction(true);
    setDeposit(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    ctx.users[user].balance += deposit;
    subctx.transactions.push({name: ctx.users[user].name, email:ctx.users[user].email, type: 'Deposit', delta: deposit})    
    setValidTransaction(false);
    clearForm();
  };

  const userChange = (event) => {
    let name = event.target.value;
    console.log(name);
    setUser(name);
  }

  const clearForm = () => {
    setDeposit(0);
    setShow(true);
    setTimeout(() => setShow(false),2000);
  }

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function containsLetter(str) {
    const letterRegex = /[a-zA-Z]/;
    return letterRegex.test(str);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={
              <form onSubmit={handleSubmit}>
              <div className='container'>
                  <div className='row'>
                    <div className='col'>
                      <h5>{`Account Balance $ ${ctx.users[user].balance} `}</h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      Account
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <select className="form-control custom-select" aria-label="Default select example" onChange={userChange}>
                        {usersList}
                      </select>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      Deposit Amount
                    </div>
                  </div>
                </div>
                {
                  <ATMDeposit onChange={handleChange} isValid={validTransaction}></ATMDeposit>
                }
              {show && <div className="card-footer text-bg-success mt-2"><h5>Deposit was a succcess!</h5></div>}
              </form>
      }/>
    );
};
export default Deposit;

