import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Icon from '../../images/icon_transp.jpeg';




class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = true;
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">the Garage</a></div>

                    <ul className="navbar-nav">
                        {/* {isUserLoggedIn && <li><Link className="nav-link" to="/home/dummy">Home</Link></li>} */}
                        <li><Link className="nav-link" to="/start">Start</Link></li>
                        <li><Link className="nav-link" to="/rentingPage">Rent</Link></li>
                        <li><Link className="nav-link" to="/community">Community</Link></li>
                    </ul>

                    {/* <a className ="navbar-right" > <img src={Icon}></img> </a> */}

                </nav>
            </header>
        );
    }
    
}


export default withRouter(HeaderComponent); // withRouter(): för att header ska vara uppdaterade