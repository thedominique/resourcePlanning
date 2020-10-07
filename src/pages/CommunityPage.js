import React, { Component } from 'react'
import './community.css'

import Com from '../images/community.jpg'
import Pals from '../images/pals.jpg'


import { WithRouter } from 'react-router-dom'



class RentingPage extends Component {

    render() {
        return (
            <>
                <section class="hero">


                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="content">
                                    <h2>What are you waiting for?</h2>
                                    <p color = "white">
                                        Now that we took care of your gear it’s time to explore!
                                        Find your next tour guide, travel buddy or hiking companion in The Garage community.
                        <br></br>
                                        Post your next adventure in the news feed and find likeminded people that will join you on your next trip.
                        </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <link href='https://fonts.googleapis.com/css?family=Lato|Roboto:400,900' rel='stylesheet' type='text/css' />
                                <div class="container">
                                    
                                    <div class="col">
                                        <a href="http://marcel-pirnay.be/" class="btn">
                                            <svg width="277" height="62">
                                                <defs>
                                                    <linearGradient id="grad1">
                                                        <stop offset="0%" stop-color="#FF8282" />
                                                        <stop offset="100%" stop-color="#E178ED" />
                                                    </linearGradient>
                                                </defs>
                                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="240" height="50"></rect>
                                            </svg>

                                            <span>Climbing</span>
                                        </a>
                                    </div>

                                    <a href="http://marcel-pirnay.be/" class="btn">
                                        <svg width="277" height="62">
                                            <defs>
                                                <linearGradient id="grad1">
                                                    <stop offset="0%" stop-color="#FF8282" />
                                                    <stop offset="100%" stop-color="#E178ED" />
                                                </linearGradient>
                                            </defs>
                                            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="200" height="50"></rect>
                                        </svg>

                                        <span>skiing</span>
                                    </a>

                                    <a href="http://marcel-pirnay.be/" class="btn">
                                            <svg width="277" height="62">
                                                <defs>
                                                    <linearGradient id="grad1">
                                                        <stop offset="0%" stop-color="#FF8282" />
                                                        <stop offset="100%" stop-color="#E178ED" />
                                                    </linearGradient>
                                                </defs>
                                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="270" height="50"></rect>
                                            </svg>

                                            <span>Kayaking</span>
                                        </a>

                                </div>
                            </div>

                            <div class="col">
                                
                                Tell us what you like
                                <a href="http://marcel-pirnay.be/" class="btn">
                                    <svg width="277" height="62">
                                        <defs>
                                            <linearGradient id="grad1">
                                                <stop offset="0%" stop-color="#FF8282" />
                                                <stop offset="100%" stop-color="#E178ED" />
                                            </linearGradient>
                                        </defs>
                                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="180" height="50"></rect>
                                    </svg>

                                    <span>hiking</span>
                                </a>

                                <a href="http://marcel-pirnay.be/" class="btn">
                                    <svg width="277" height="62">
                                        <defs>
                                            <linearGradient id="grad1">
                                                <stop offset="0%" stop-color="#FF8282" />
                                                <stop offset="100%" stop-color="#E178ED" />
                                            </linearGradient>
                                        </defs>
                                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="270" height="50"></rect>
                                    </svg>

                                    <span>camping</span>
                                </a>

                                <a href="http://marcel-pirnay.be/" class="btn">
                                    <svg width="277" height="62">
                                        <defs>
                                            <linearGradient id="grad1">
                                                <stop offset="0%" stop-color="#FF8282" />
                                                <stop offset="100%" stop-color="#E178ED" />
                                            </linearGradient>
                                        </defs>
                                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="180" height="50"></rect>
                                    </svg>

                                    <span>more ></span>
                                </a>

                            </div>
                        </div>
                    </div>

                </section>


                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <br></br><br></br><br></br><br></br>
                            <img src={Com} width="600" height="400"></img>
                        </div>
                        <div class="col-md-4">
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