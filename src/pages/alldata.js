import React from 'react';
import Card from "../components/card";
import UserContext  from "../context/usercontext";
import SubmissionContext  from "../context/submissioncontext";

function AllData(){
  const ctx = React.useContext(UserContext);
  const subctx = React.useContext(SubmissionContext);

  let usersList = ctx.users.map((item, index) => {
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{`$${item.balance}`}</td>
      </tr>
    );
  });

  let submissionsList = subctx.transactions.map((item, index) => {
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.type}</td>
        <td>{`$${item.delta}`}</td>
      </tr>
    );
  });

  return (
    <Card
      bgcolor=""
      txtcolor="black"
      header="All Accounts In The Bank"
      body={
        <>
        {/* {JSON.stringify(subctx)}<br/> */}
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {usersList}
            </tbody>
        </table>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Delta</th>
              </tr>
            </thead>
            <tbody>
              {submissionsList}
            </tbody>
        </table>
        </>
      }
    />
  );
}
export default AllData;
