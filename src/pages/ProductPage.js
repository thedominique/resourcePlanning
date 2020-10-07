import React, { Component } from 'react'
import { WithRouter } from 'react-router-dom'
import './startPage.css';

import Hike6 from '../images/hike6.jpg';
import { string } from 'prop-types';
import DayPicker from '../components/DayPicker';
import {Button} from 'react-bootstrap';

class ProductPage extends Component {



    render() {
        if (this.props.location.state.image != undefined) {
            console.log(this.props.location.state.image);
        }
        return (

            <div>
                <br></br>
                <div class = "container" >
                    <div class = "row" >
                        <div class= "col-md-5"><img padding ="20px" width="500" height ="300" src={require(`../images/${this.props.location.state.image}`)} ></img></div>
                        <div class = "col-md-7"><DayPicker></DayPicker></div>
                    </div>

                    <br></br><br></br>
                    <div class = "row" >
                        <div class = "col-md-7">
                        <h1>Product name</h1>
                            <p>Product description. Quite a nice tent, innit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque. Augue neque gravida in fermentum et sollicitudin ac. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Dolor sit amet consectetur adipiscing elit ut aliquam. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Enim blandit volutpat maecenas volutpat blandit aliquam. Pulvinar sapien et ligula ullamcorper</p>
                        </div>
                        <div class = "col-md-5">
                            <h5>price: $50</h5>
                            <br></br>
                            
                        <a href="http://marcel-pirnay.be/" class="btn"
                            onClick={() => this.props.history.push({
                                pathname: "/book",
                                state: { image: "hike3.jpg" }
            
                            })}
                        >
                                            <svg width="277" height="62">
                                                <defs>
                                                    <linearGradient id="grad1">
                                                        <stop offset="0%" stop-color="#e9ffdd" />
                                                        <stop offset="100%" stop-color="#b9c7b1" />
                                                    </linearGradient>
                                                </defs>
                                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="270" height="50"></rect>
                                            </svg>

                                            <span>Book </span>
                                        </a>
                        </div>
                    </div>

                </div>
                
               </div>

        );
    }
}
export default ProductPage