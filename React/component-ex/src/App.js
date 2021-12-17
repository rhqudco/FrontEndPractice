import React, { Component } from 'react';
import './App.css';
import Header from './component/Content'
import Content from './component/Header'
import Footer from './component/Footer'

class App extends Component {
  render() {
    
    return (
      <div className='App'>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;