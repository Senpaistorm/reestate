import React from 'react'
import {
    Link
  } from "react-router-dom";

import { useAuth0 } from "../react-auth0-spa.js";

const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <nav className="navbar">
        <ul id="navbar_ul">
            <li>
            <Link className="link" id="buy_btn" to="/homes">Buy</Link>
            </li>
            <li>
            <Link className="link" to="/homes/for_rent">Rent</Link>
            </li>
            <li>
            <Link className="link" to="/sell">Sell</Link>
            </li>
            <li>
            <Link className="link disabled" to="/users">Home Loans</Link>
            </li>
            <li>
            <Link id="homeTitle" to="/">Reestate</Link>
            </li>
            <li>
            <Link className="link" to="/homes">List your rental</Link>
            </li>
            <li>
            <Link className="link" to="/users">Advertise</Link>
            </li>
            
            {!isAuthenticated && (
                <li>
                    <Link className="link" to="" onClick={() => loginWithRedirect({})}>Sign in</Link>
                </li>
            )}

            {isAuthenticated && 
                <>
                <li>
                    <Link className="link" to="" onClick={() => logout()}>Log out</Link>
                </li>
                <li>
                    <Link className="link" to="/profile">Profile</Link>
                </li>
                </>
            }
            
            
            <li>
            <Link className="link" to="/">Help</Link>
            </li>
        </ul>
        </nav>
    )
    
}

export default Nav