import React, { Component } from 'react';

import './cubeform.css'


class CubeForm extends Component {

    render() {
        return (
                <>
                <div>
                <form id="form" class="topBefore">   
                    <input id="name" type="text" placeholder="NAME"/>
                    <input id="email" type="text" placeholder="E-MAIL"/>
                    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                    <input id="submit" type="submit" value="Send"/>
                </form>  
                </div>

                     
                </>
        );
    }
}

export default CubeForm