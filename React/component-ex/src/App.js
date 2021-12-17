import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const company = "Go.cp";
    const tel = "010-1111-1111";
    const address = "Gunsan"
    return (
      <div>

          <h1>???</h1>


          <h3>여기는 회사</h3>

        <footer>
          {company} <br />
          {tel} <br />
          {address} <br />
        </footer>
      </div>
    );
  }
}

export default App;