import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="header">
            <ul>
                <li>
                     <Link to="/Products"> Products List</Link>
                </li>
                <li>
                <Link to="/Cart"> Cart</Link>   
                </li>
            </ul>
           
        </div>

    )
}
export default Header;
