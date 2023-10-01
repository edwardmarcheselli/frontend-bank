import React from 'react';
import Card from "../components/card";

function Home(){
  return (
    <Card
      txtcolor="black"
      header="Frontend Bank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Bank Logo"/>)}
    />    
  );  
}
export default Home;