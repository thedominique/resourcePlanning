import React, { Component } from 'react'
import {WithRouter} from 'react-router-dom'
import './startPage.css'
import Hike6 from '../images/hike6.jpg'
import { string } from 'prop-types';

class ProductPage extends Component {



    render() {
        if(this.props.location.state.image!=undefined){
            console.log(this.props.location.state.image);
        }
        return ( 
            
               <div>
                   <img src= {require(`../images/${this.props.location.state.image}`)} ></img>

               </div>
               
        );
    }
}
export default ProductPage