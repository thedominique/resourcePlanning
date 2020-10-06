import React, { Component } from 'react'
import './startPage.css'

import Com from '../images/community.jpg'


import { WithRouter } from 'react-router-dom'



class RentingPage extends Component {

    render() {
        return (
            <>
        <div class = "container">
            <div class = "row">
                <div class= "col-md-5">
                <br></br><br></br><br></br><br></br>
                    <div class="blockquote-wrapper">
                        <div class="blockquote">
                            <h1>
                                <br></br>We put the world at your feet.
                            </h1>
                            <h4>- the Garage</h4>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div class= "col-md-4">
                <br></br><br></br><br></br><br></br>
                <img src = {Com} width = "600" height ="400"></img></div>
            </div>
        </div>

        <link href='https://fonts.googleapis.com/css?family=Josefin+Sans|Abril+Fatface' rel='stylesheet' type='text/css'/>

    <blockquote1>
        <p>
            We make great outdoor experiences accessible to everyone by building a community 
            of mindful adventurers who lend and borrow their gear in order 
            to create a more sustainable product life cycle for the love of our environment.
            </p>
            
                <cite1><a href="https://www.brucelawson.co.uk/2013/on-citing-quotations-again/">The Garage</a></cite1>
            
            <div1></div1>
    </blockquote1>
            </>

        );

    }


}

export default RentingPage;