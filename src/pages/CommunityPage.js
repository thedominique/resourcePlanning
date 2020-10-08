import React, { Component } from 'react'
import './community.css'

import Com from '../images/community.jpg'
import Pals from '../images/hike.jpeg'
import Kayak from '../images/kayak2.jpeg'
import Skiis from '../images/skiis.jpg'
import Boats from '../images/boats.jpeg'
import Snowboard from '../images/snowboard.jpeg'
import Climb from '../images/climb.jpeg'


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
                                    <br></br>
                                    <p color="white">
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
                                        <a href="https://open.spotify.com/track/1QJb6LWvPXZpTMiqqODqkH?si=qvTHl6mWSdy2iZMdIyv7bw" class="btn">
                                            <svg width="277" height="62">
                                                <defs>
                                                    <linearGradient id="grad1">
                                                        <stop offset="0%" stop-color="#d0d4d0" />
                                                        <stop offset="100%" stop-color="#5b7358" />
                                                    </linearGradient>
                                                </defs>
                                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="240" height="50"></rect>
                                            </svg>

                                            <span>Climbing</span>
                                        </a>
                                    </div>

                                    <a href="https://open.spotify.com/track/1QJb6LWvPXZpTMiqqODqkH?si=CEGERalpSN6BVvPRpyAs5g" class="btn">
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

                                    <a href="https://open.spotify.com/track/1QJb6LWvPXZpTMiqqODqkH?si=CEGERalpSN6BVvPRpyAs5g" class="btn">
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
                                <a href="https://open.spotify.com/track/1QJb6LWvPXZpTMiqqODqkH?si=CEGERalpSN6BVvPRpyAs5g" class="btn">
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

                                <a href="https://open.spotify.com/track/1QJb6LWvPXZpTMiqqODqkH?si=CEGERalpSN6BVvPRpyAs5g" class="btn">
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

                                <a href="https://open.spotify.com/track/1QJb6LWvPXZpTMiqqODqkH?si=CEGERalpSN6BVvPRpyAs5g" class="btn">
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

                
                {/* feed */}
                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike.jpeg" }})}>
                    <div class="imgbox"> <img src={Pals}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Morning hike<br></br> <span>Hosted by Eliza</span></h2>
                        <ul>
                            <li>Every sunday</li>
                        </ul>
                        <p className="product-description"> <br></br>
                            Start your day and finish your week with us on a refreshing morning hike! 
                            </p>
                    </div>
                </div>
                
                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "skiis.jpg" }})}>
                    <div class="imgbox"> <img src={Skiis}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Skiing trip<br></br> <span>Hosted by the Garage</span></h2>
                        <ul>
                            <li>15/12/20 </li>
                        </ul>
                        <p className="product-description"> <br></br>
                            Love snow and a kick of adrenaline? Or maybe kicking it back at the foot of the hill is more your style. We've got you covered.
                            </p>
                    </div>
                </div>

                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "kayak2.jpeg" }})}>
                    <div class="imgbox"> <img src={Kayak}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Kayaking<br></br> <span>Hosted by Sal</span></h2>
                       
                        <ul>
                            <li>Tomorrow</li>
                        </ul>
                        <p className="product-description"> <br></br>
                            Explore the waters in a unique way and help us raise awarness about ocean pollution
                            </p>
                    </div>
                </div>

                    {/* row2 */}
                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "boats.jpeg" }})}>
                    <div class="imgbox"> <img src={Boats}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Calming roing picnic<br></br> <span>Hosted by John</span></h2>
                        <ul>
                            <li>Wednesday</li>
                        </ul>
                        <p className="product-description"> <br></br>
                            Start your day and finish your week with us on a refreshing morning hike! 
                            </p>
                    </div>
                </div>
                
                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "climb.jpeg" }})}>
                    <div class="imgbox"> <img src={Climb}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Sunset climb<br></br> <span>Hosted by the Garage</span></h2>
                        <ul>
                            <li>Tonight </li>
                        </ul>
                        <p className="product-description"> <br></br>
                            Love snow and a kick of adrenaline? Or maybe kicking it back at the foot of the hill is more your style. We've got you covered.
                            </p>
                    </div>
                </div>

                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "snowboard.jpeg" }})}>
                    <div class="imgbox"> <img src={Snowboard}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Learn how to snowboard<br></br> <span>Hosted by Ellen</span></h2>
                       
                        <ul>
                            <li>13/01/21</li>
                        </ul>
                        <p className="product-description"> <br></br>
                            Explore the waters in a unique way and help us raise awarness about ocean pollution
                            </p>
                    </div>
                </div>


            </>

        );

    }


}

export default RentingPage;