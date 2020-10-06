import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from '../components/static/HeaderComponent';
import FooterComponent from '../components/static/FooterComponent';

import StartPage from '../pages/StartPage'
import ProductPage from '../pages/ProductPage';
import RentingPage from '../pages/RentingPage';
import CommunityPage from '../pages/CommunityPage';
import BookingPage from '../pages/BookingPage';


class ViewCtrl extends Component {

    render() {
        return (
                <Router>  
                    <>
                    <HeaderComponent/>   
                    <Switch>
                        <Route path="/" exact component={StartPage} />
                        <Route path="/start" component={StartPage} />
                        <Route path="/productPage" component={ProductPage} />
                        <Route path="/rentingPage" component={RentingPage} />
                        <Route path="/community" component={CommunityPage} />
                        <Route path="/book" component={BookingPage} />
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
        );
    }
}

export default ViewCtrl