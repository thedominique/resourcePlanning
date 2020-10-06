import React, { Component } from 'react'
import { WithRouter } from 'react-router-dom'
import './startPage.css';
import Hike6 from '../images/hike6.jpg';
import { string } from 'prop-types';
import DayPicker from '../components/DayPicker';

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
                </div>
                
               </div>

        );
    }
}
export default ProductPage