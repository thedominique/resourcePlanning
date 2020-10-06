import React, { Component } from 'react'
import './startPage.css'

import Tent from '../images/Tent.jpeg'
import Hike1 from '../images/hike1.jpg'
import Hike2 from '../images/hike2.jpg'
import Hike3 from '../images/hike3.jpg'
import Hike8 from '../images/hike8.jpeg'
import Hike9 from '../images/hike9.jpeg'
import Hike7 from '../images/hike7.jpeg'
import Hike10 from '../images/hike10.jpeg'
import Hike6 from '../images/hike6.jpg'


import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import FooterComponent from '../components/static/FooterComponent';

import { WithRouter } from 'react-router-dom'


var sectionStyle = {

    width: "100%",
    height: "400px",
    backgroundImage: `url(${Tent})`,
    "margin-bottom": "3%"
};


class RentingPage extends Component {

    render() {
        return (
            <>
        <div class="blockquote-wrapper">
            <div class="blockquote">
                <h1>
                    <br></br>We put the world at your feet.
      
                </h1>
                <h4>- the Garage</h4>
                <br></br>
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