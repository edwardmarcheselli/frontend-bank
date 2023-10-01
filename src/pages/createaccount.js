import React from 'react';
import Card from "../components/card";
import UserContext  from "../context/usercontext";
import SubmissionContext  from "../context/submissioncontext";
import { useFormik } from "formik";

function CreateAccount(){
  
  const [show, setShow]         = React.useState(true);
/*   const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState(''); */
  const ctx = React.useContext(UserContext);  
  const subctx = React.useContext(SubmissionContext);
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form', values);
      ctx.users.push({...values, balance:100});
      subctx.transactions.push({name: values.name, email:values.email, type: 'Initial Deposit', delta: 100})
      setShow(false);
    },
    validate: values =>{
      let errors = {};
      if(!values.name) errors.name = "Field required";
      if(!values.email) errors.email = "Field required";
      if(!values.email.includes('@')) errors.email = "Must be an email";
      if(values.password.length < 8 ? true : false) errors.password = "Password must be greater than 8 characters";
      return errors;
    }
  })

  function clearForm(){
    formik.resetForm();
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      body={show ? (  
              <>
              <form onSubmit={formik.handleSubmit}>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={formik.values.name} validateOnChange={true} onChange={formik.handleChange} />
              {formik.errors.name ? <div id="nameError" style={{color:'black'}}>{formik.errors.name}<br/></div>: null}
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={formik.values.email} validateOnChange={true} onChange={formik.handleChange}/>
              {formik.errors.email ? <div id="emailError" style={{color:'black'}}>{formik.errors.email}<br/></div>: null}
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={formik.values.password} validateOnChange={true} onChange={formik.handleChange}/>
              {formik.errors.password ? <div id="passwordError" style={{color:'black'}}>{formik.errors.password}<br/></div>: null}
              <br/><button type="submit" className="btn btn-light">Create Account</button>
              </form>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
export default CreateAccount;
