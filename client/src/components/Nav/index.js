import React from "react";
//import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    // if (Auth.loggedIn()) {
    //   return (
    //     <ul className="flex-row">
    //       <li className="mx-1">
    //         <Link to="/orderHistory">
    //           Order History
    //         </Link>
    //       </li>
    //       <li className="mx-1">
    //         {/* this is not using the Link component to logout or user and then refresh the application to the start */}
    //         <a href="/" onClick={() => Auth.logout()}>
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //   );
    // } else {
      return (
        <ul className="flex-row">
            <li className="mx-1">
                Concessions
            </li>
            <li className="mx-1">
                Tables, Linens, and Chairs
            </li>
            <li className="mx-1">
                Slides
            </li>
            <li className="mx-1">
                Plates, Glassware, and Silverware
            </li>
            <li className="mx-1">
                Tents
            </li>
        </ul>
      );
    }
  

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="party-hat">🥳</span>
          Rent-A-Party  
        </Link>
      </h1>
      <div>
       
      </div>


      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;