import React, { Component } from 'react'
import './codebases.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import { WithRouter } from 'react-router-dom'

import fancyBtn from '../components/FancyButton'

class Codebases extends Component {

    render() {
        return (
            <>

                <div class="jumbotron" style={{width: window.innerWidth*0.75, margin: "0 auto",marginTop: window.innerHeight*0.10, background:"rgba(0,0,0,0.7)"}}>
                    <h1 class="display-4" style={{color: "white"}}>Create your first codebase</h1>
                    <p class="lead" style={{color: "white"}}>We'll help you on the way. Start the step by step guide where you'll learn how to create a codebase from screatch or import an existing project</p>
                    <hr class="my-4"/>
                    <p style={{color: "white"}}>This page is where you'll find and manage your codebases in the future. What are you waiting for?</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Start the guide</a>
                    </p>
                </div>

                <div class='some-page-wrapper'>
                    <div class='row'>
                        <div class='column'>
                        <div class='blue-column'>
                            <h1 style = {{color: "white", marginTop: window.innerHeight*0.05}}>Existing codebases</h1>
                            <Jumbotron style={{width: window.innerWidth*0.40, margin: "0 auto",marginTop: window.innerHeight*0.01, background:"rgba(0,0,0,0.7)"}}>
                            
                            <div class="card" style={{background: "rgba(0,0,0,0.2)", marginBottom:"1%"}}>
                                <div class="card-body" style={{color: "white"}}>
                                view: 5c1acdf3 | My first codebase 
                                </div>
                            </div>

                            <div class="card" style={{background: "rgba(0,0,0,0.2)", marginBottom:"1%"}}>
                                <div class="card-body" style={{color: "white"}}>
                                view: 3c1ledf3 | Big project
                                </div>
                            </div>

                            <div class="card" style={{background: "rgba(0,0,0,0.2)", marginBottom:"1%"}}>
                                <div class="card-body" style={{color: "white"}}>
                                view: 8c1acl3f3 | Collabing and dabbing 
                                </div>
                            </div>

                            <a class="btn btn-primary btn-lg" href="#" role="button" style ={{marginTop: "3%"}}>Create new</a>
                            
                            </Jumbotron>
                        </div>
                        </div>
                        <div class='column'>
                        <div class='green-column'>
                        <h1 style = {{color: "white", marginTop: window.innerHeight*0.05}}>Latest changes</h1>
                            <Jumbotron style={{width: window.innerWidth*0.40, margin: "0 auto",marginTop: window.innerHeight*0.01, background:"rgba(0,0,0,0.7)"}}>
                            
                            <div class="card" style={{background: "rgba(0,0,0,0.2)", marginBottom:"1%"}}>
                                <div class="card-body" style={{color: "white"}}>
                                🟢  Your latest change in 8c1acl3f3, Collabing and dabbing has been reviewed 
                                </div>
                            </div>

                            <div class="card" style={{background: "rgba(0,0,0,0.2)", marginBottom:"1%"}}>
                                <div class="card-body" style={{color: "white"}}>
                                <img src="https://i.redd.it/v0caqchbtn741.jpg" style={{width:window.innerWidth*0.04, height: window.innerHeight*0.04, margin: "1%"}}></img>
                                 Mike requested a review on Big project
                                </div>
                            </div>

                            <div class="card" style={{background: "rgba(0,0,0,0.2)", marginBottom:"1%"}}>
                                <div class="card-body" style={{color: "white"}}>
                                See all 
                                </div>
                            </div>
                            </Jumbotron>
                        </div>
                        </div>
                    </div>
                    </div>

                
            </>
            

        );

       

    }


}

export default Codebases;