import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../static/header.css'



class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = true;
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">Sturdy</a></div>

                    <ul className="navbar-nav navbar-center">
                        {/* {isUserLoggedIn && <li><Link className="nav-link" to="/home/dummy">Home</Link></li>} */}
                        <li><Link className="nav-link" to="/install">Install</Link></li>
                        <li><Link className="nav-link" to="/codebases">Codebases</Link></li>
                        <li><Link className="nav-link" to="/start">About</Link></li>
                        <li><Link className="nav-link" to="/start">Community</Link></li>
                       
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