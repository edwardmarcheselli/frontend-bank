import { NavLink } from "react-router-dom";

function NavBar(){

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Frontend Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-underline">
          <li className="nav-item">
            <NavLink className="nav-link" title="Link to the bank homepage" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" title="Create an account" to="/CreateAccount/">Create Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" title="Deposit money into an account" to="/deposit/">Deposit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" title="Withdraw money from an account" to="/withdraw/">Withdraw</NavLink>
          </li>
{/*           <li className="nav-item">
            <NavLink className="nav-link" title="View an account balance" to="/balance/">Balance</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" title="View all the data in the bank" to="/alldata/">AllData</NavLink>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}
export default NavBar;
