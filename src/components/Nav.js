import React from 'react'
import {
    Link
  } from "react-router-dom";

import { useAuth0 } from "../react-auth0-spa.js";

const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link id="homeTitle" to="/">Reestate</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="link nav-link" id="buy_btn" to="/homes">Buy</Link>
                    <Link className="link nav-link" to="/homes/for_rent">Rent</Link>
                    <Link className="link nav-link" to="/sell">Sell</Link>
                    <Link className="link nav-link" to="/homes">List your rental</Link>
                    <Link className="link nav-link" to="/users">Advertise</Link>
                    {!isAuthenticated && (
                            <Link className="link nav-link" to="" onClick={() => loginWithRedirect({})}>Sign in</Link>
                    )}
                    {isAuthenticated && 
                        <>
                            <Link className="link nav-link" to="" onClick={() => logout()}>Log out</Link>
                            <Link className="link nav-link" to="/profile">Profile</Link>
                        </>
                    }
                    <Link className="link nav-link" to="/">Help</Link>
                </div>
            </div>
        </nav>
    )
    
}

export default Nav