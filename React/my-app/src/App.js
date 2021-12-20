import React, { Component } from "react";
import './App.css';
import Subject from './components/Subject';
import NAV from './components/NAV';
import Content from './components/Content';
import JSX from './components/JSX';
import Student from './components/Student';

class App extends Component {
  render() {
    return (
      <div>
        {/* <h3>안녕하세요.</h3> */}
        {/* 위에 추가한 컴포넌트 사용 : 태그 형식으로 사용한다. */}
        {/* <Subject></Subject>
        <NAV></NAV>
        <Content></Content> */}
        <JSX></JSX>
        <Subject title="제목" sub="부제목"></Subject>
        <Student name="홍길동" age="20" address="서울"></Student>
      </div>
    )
  }
}
export default App;