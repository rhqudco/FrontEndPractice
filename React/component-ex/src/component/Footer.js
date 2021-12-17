import React, { Component } from 'react';

class Footer extends Component {
    render() {
    const company = "Go.cp";
    const tel = "010-1111-1111";
    const address = "Gunsan"
        return (
            <div>
                {company} <br />
                {tel} <br />
                {address} <br />
            </div>
        );
    }
}

export default Footer;