import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from '../components/static/HeaderComponent';
import FooterComponent from '../components/static/FooterComponent';

import StartPage from '../pages/StartPage'
import ProductPage from '../pages/ProductPage';


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
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
        );
    }
}

export default ViewCtrl