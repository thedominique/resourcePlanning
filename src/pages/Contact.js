
import React, { Component } from 'react'
import './install.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import ContactForm from '../components/CubeForm'

import { WithRouter } from 'react-router-dom'


class Contact extends Component {

    render() {
        return (
            <>
                <Jumbotron style={{ width: window.innerWidth * 0.99, margin: "0 auto", marginTop: window.innerHeight * 0.02, background: "rgba(0,0,0,0.7)" }}>
                        <div class="container" >
                            <div class="row" >
                                <h1 style={{ color: "white", marginBottom: "5%" }}>We're here to answer all of your questions, big or small.</h1>
                            </div>

                            <br></br><br></br>
                            <div class="row" >
                                <div class="col-md-7">


                                    <p style={{ color: "white" }}>

                                        <h2 tyle={{ color: "white" }}>Mail</h2>
                                        <p style={{ color: "white" }}>  info@afinnman.com <br></br>
                                            <code>info@afinnman.com </code>
                                        </p>

                                        <h2 tyle={{ color: "white" }}>Phone</h2>
                                        <p style={{ color: "white" }}>  +46 70 112 12 12 <br></br>
                                        </p>


                                        <h2 tyle={{ color: "white" }}>Office</h2>
                                        <p style={{ color: "white" }}>  Blablabla gatan 112 <br></br>
                                            <code>Blablabla gatan 112</code>
                                        </p>

                                    </p>
                                </div>
                                <div class="col-md-5">

                                    <ContactForm ></ContactForm>


                                </div>
                            </div>

                        </div>

                    <Button class="primary">Explore Sturdy</Button>
                </Jumbotron>




            </>




        );



    }


}

export default Contact;