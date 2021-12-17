import React, { Component } from 'react';
import Img from '../image/고흐.PNG'

class Content extends Component {
    render() {
        return (
            <div>
                <img src={require("../image/고흐.PNG")}/>
            </div>
        );
    }
}

export default Content;