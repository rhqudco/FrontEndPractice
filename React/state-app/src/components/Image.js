import React, { Component } from 'react';
import imgApple from '../images/apple.png';
import imgBanana from '../images/banana.png';
import imgLizard from '../images/lizard.png';
import imgLizardon from '../images/lizardon.png';

class Image extends Component {
    state = {
        imgA : imgLizard,
        imgB : imgLizardon
    }
    render() {
        return (
            <div>
                <img src={imgApple} alt='apple' /> <br />
                <img src={imgBanana} alt='banana' /> <br />
                <img src="/assets/black.png" alt="black" /> 
                <img src="/assets/pink.png" alt="black" /> <br />
                <img src={this.state.imgA} alt="lizard" />
                <img src={this.state.imgB} alt="lizardon" /><br />
            </div>
        );
    }
}

export default Image;