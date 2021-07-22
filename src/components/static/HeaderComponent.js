import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../static/header.css'



class HeaderComponent extends Component {
    render() {
        
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">SQ resource planning</a></div>

                    <ul className="navbar-nav navbar-center">
                        {/* {isUserLoggedIn && <li><Link className="nav-link" to="/home/dummy">Home</Link></li>} */}
                        <li><Link className="nav-link" to="/contact">Request resources</Link></li>
                        <li><Link className="nav-link" to="/myprojects">My projects</Link></li>
                        <li><Link className="nav-link" to="/start">Somethingblabla</Link></li>
                       
                    </ul>

                    {/* <a className ="navbar-right" > <img src={Icon}></img> </a> */}

                </nav>
            </header>
        );
    }
    
}


{/* <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Portefolio</a>
                <a href="#">Contact</a>
                <div class="animation start-home"></div>
            </nav> */}

export default withRouter(HeaderComponent); // withRouter(): för att header ska vara uppdaterade