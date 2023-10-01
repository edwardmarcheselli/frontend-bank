import React from 'react';
import Card from "../components/card";
import UserContext  from "../context/context";

function Balance(){
  const ctx = React.useContext(UserContext);
  const [user, setUser] = React.useState(0);
  const [totalState, setTotalState] = React.useState(ctx.users[user].balance);

  let usersList = ctx.users.map((item, index) => {
    return (
      <option value={index} key={1+index} eventkey={1+index}>{item.name}</option>
    );
  });

  const userChange = (event) => {
    let name = event.target.value;
    console.log(name);
    setUser(name);
    setTotalState(ctx.users[name].balance);
  }

  return (
    <Card
      bgcolor="primary"
      header="Balance"
      body={  
              <>
                User<br/>
                <select className="form-select-lg" aria-label="Default select example" onChange={userChange}>
                  {usersList}
                </select>
                <h5>{`Account Balance $ ${totalState} `}</h5>
              </>
            }
    />
  )
};
export default Balance;
