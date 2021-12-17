import React, { Component } from "react";
import './App.css';
import Subject from './components/Subject';
import NAV from './components/NAV';
import Content from './components/Content';
import JSX from './components/JSX';

class App extends Component {
  render() {
    return (
      <div>
        {/* <h3>안녕하세요.</h3> */}
        {/* 위에 추가한 컴포넌트 사용 : 태그 형식으로 사용한다. */}
        {/* <Subject></Subject>
        <Subject></Subject>
        <NAV></NAV>
        <Content></Content> */}
        <JSX></JSX>
      </div>
    )
  }
}

export default App;