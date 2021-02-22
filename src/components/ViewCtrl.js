import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from '../components/static/HeaderComponent';
import FooterComponent from '../components/static/FooterComponent';

import StartPage from '../pages/StartPage'
import Contact from '../pages/Contact'



class ViewCtrl extends Component {

    render() {
        return (
                <Router>  
                    <>
                    <HeaderComponent/>   
                    <Switch>
                        <Route path="/" exact component={StartPage} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/start" component={StartPage} />
                        
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
        );
    }
}

export default ViewCtrl