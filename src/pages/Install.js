
import React, { Component } from 'react'
import './install.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import { WithRouter } from 'react-router-dom'


class Install extends Component {

    render() {
        return (
            <>
                <Jumbotron style={{width: window.innerWidth*0.99, margin: "0 auto",marginTop: window.innerHeight*0.02, background:"rgba(0,0,0,0.7)"}}>
                    
                    <h1 style={{color: "white", marginBottom: "5%"}}>Install the sturdy client on your computer</h1>
                    <p style={{color: "white"}}>                    
                    <h2 tyle={{color: "white"}}>1. install the client</h2>
                    <p style={{color: "white"}}>  The client is available for macOS and Linux.<br></br>
                        macOS: <code>brew install driva-dev/tap/driva</code> (via brew.sh), and install FUSE for macOS (direct download).<br></br>
                        Linux: Download <code>driva</code> and move it to your $PATH, and install fuse <code>apt-get install fuse</code> (or similar).
                        </p>

                    <h2 style={{color: "white", marginTop: "5%"}}>2. Authenticate the client</h2>
                    <p style={{color: "white"}}>  Run <code>driva auth</code> and follow the instructions (you'll be asked to copy-paste a code from the browser).
                        </p>

                    
                    <h2 style={{color: "white", marginTop: "5%"}}>3. Setup a codebase!</h2>
                        <p style={{color: "white"}}> Go to the codebase page, and follow the instructions from there.
                        </p>

                    </p>
                    <Button class= "primary">Explore Sturdy</Button>
                </Jumbotron>

                
            </>
            

        );

       

    }


}

export default Install;