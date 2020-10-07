import React, { Component } from 'react'
import './community.css'

import Com from '../images/community.jpg'


import { WithRouter } from 'react-router-dom'



class RentingPage extends Component {

    render() {
        return (
            <>
                <section class="hero">
                    <div class="content">
                        <h2>What are you waiting for?</h2>
                        <p>
                        Now that we took care of your gear it’s time to explore!
                        Find your next tour guide, travel buddy or hiking companion in The Garage community.
                        <br></br>
                        Post your next adventure in the news feed and find likeminded people that will join you on your next trip.
                        </p>
                    </div>

                </section>


                <div id="con">
                    <h1></h1><br></br>
                    <p>
                        
        
            </p>
                    <p>                Post your next adventure in the news feed and find likeminded people that will join you on your next trip.
</p>

                </div>



                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
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
                        <div class="col-md-4">
                            <br></br><br></br><br></br><br></br>
                            <img src={Com} width="600" height="400"></img></div>
                    </div>
                </div>

                <link href='https://fonts.googleapis.com/css?family=Josefin+Sans|Abril+Fatface' rel='stylesheet' type='text/css' />

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