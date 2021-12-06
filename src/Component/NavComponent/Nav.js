import React, {useState} from "react";
import "../NavComponent/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {Helmet} from "react-helmet";
// import Home from "../HomeComponent/home";

import { NavLink } from "react-router-dom";

import logo from "../NavComponent/netflix-logo.png";


function Nav() {

    const [showLinks, setShowLinks] = useState(false)
    
    return(
        <>  
            <Helmet>
                <meta charSet="utf-8" />
                <title>Movie App</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="nav">
                <div className ="left">
                    <div className ="logo"><img src= {logo} alt="Logo"/></div>
                    <div className = "menu" id = {(showLinks ? "hidden" : "")}>
                        <ul>
                            <li><NavLink exact to ="/" activeClassName = "active-link" >Home</NavLink></li>
                            <li><NavLink to ="/web" activeClassName = "active-link" >Web Shows</NavLink></li>
                            <li><NavLink to ="/movie" activeClassName = "active-link" >Movies</NavLink></li>
                            <li><NavLink to ="/popular" activeClassName = "active-link" >New & Popular</NavLink></li>
                            <li><NavLink to ="/fav" activeClassName = "active-link" >My List</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="notification"><FontAwesomeIcon icon={faBell} /></div>
                    <div className="profile-img"><img src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnRvb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile"/><span><FontAwesomeIcon icon={faCaretDown} /></span></div>
                </div>
                <div className = "bars" onClick = {() => setShowLinks(!showLinks)} >
                    <FontAwesomeIcon icon = {faBars} />
                </div>
            </div>
        </>
    )
}

export default Nav;