import React, { Component } from 'react'
import './startPage.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import { WithRouter } from 'react-router-dom'

import fancyBtn from '../components/FancyButton'

class StartPage extends Component {

    render() {
        return (
            <>
                <br/><br/><br></br>
                <h1 class="text-light">A simple source control and collaboration platform for teams</h1>
                <h4 class="text-light"> Fast and frictionless coding</h4>

                <br></br>

                <div class="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
                    <a class="d-block btn btn-outline-light">Get started</a>
                    <a class="d-block btn btn-outline-light">How it works</a>
                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossorigin="anonymous"></script>

                {/* <div style = {{width: window.innerWidth, background : "rgb(255,255,255,0.7)", height: "500px"}}>
                    hejkjadfkbjakbjafkj 
                </div> */}
            
                <Jumbotron style={{width: window.innerWidth*0.75, margin: "0 auto",marginTop: window.innerHeight*0.10, background:"rgba(0,0,0,0.7)"}}>
                    <h1 style={{color: "white"}}>Sturdy is the new way to build software</h1>
                    <p style={{color: "white"}}>
                    All changes are saved to the remote codebase automatically. There is no need to push and pull. Your team can take part of your changes as soon as they are made
                    </p>
                    <Button class= "primary">Explore Sturdy</Button>
                </Jumbotron>

                
            </>
            

        );

       

    }


}

export default StartPage;