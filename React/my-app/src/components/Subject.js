import React, { Component } from "react";

class Subject extends Component {
  // 디폴트 props 설정
  static defaultProps = {
    date:'2021-12-17'
  }
    render() {
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub} <br />
          {this.props.date} <br /> {/* 밑에 디폴트 props를 설정했기 때문에 출력되지 않음. */}
          {this.props.year} <br />
        </header>
      )
    }
}
// 방법 2 : 디폴트 props 설정
Subject.defaultProps = {
  year:2021
}
export default Subject;
