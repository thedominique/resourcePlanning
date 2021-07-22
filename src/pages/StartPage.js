import React, { Component } from 'react'
import './startPage.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import { WithRouter } from 'react-router-dom'

class StartPage extends Component {

    render() {
        return (
            <>
                <br/><br/><br></br>
                <h1 class="text-light">SQ Resource mngmt</h1>
                <h4 class="text-light">So cool wow</h4>

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
                    <h1 style={{color: "white"}}>Profile</h1>
                    <p style={{color: "white"}}>
                    llalalalala
                    </p>
                    <Button class= "primary">See all projects</Button>
                </Jumbotron>

                
            </>
            

        );

       

    }


}

export default StartPage;