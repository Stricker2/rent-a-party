import React from "react";
//import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
      return (
            <ul className="flex-row">
                <li className="mx-1">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        // <ul className="flex-row">
        //     <li className="mx-1">
        //         Concessions
        //     </li>
        //     <li className="mx-1">
        //         Tables, Linens, and Chairs
        //     </li>
        //     <li className="mx-1">
        //         Slides
        //     </li>
        //     <li className="mx-1">
        //         Plates, Glassware, and Silverware
        //     </li>
        //     <li className="mx-1">
        //         Tents
        //     </li>
        // </ul>
      );
    }
  
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="snow cone">🍧</span>
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