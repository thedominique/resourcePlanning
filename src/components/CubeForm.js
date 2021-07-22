import React, { Component } from 'react';

import './cubeform.css'


class CubeForm extends Component {

    render() {
        return (
                <>
                <div>
                <form id="form" class="topBefore">   
                    <input id="name" type="text" placeholder="PROJECT"/>
                    <input id="email" type="text" placeholder="RESOURCE TYPE"/>
                    <textarea id="message" type="text" placeholder="HOURS"></textarea>
                    <input id="submit" type="submit" value="Send"/>
                </form>  
                </div>

                     
                </>
        );
    }
}

export default CubeForm