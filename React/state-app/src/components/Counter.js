import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number : 0
    }
    // 여기에 이벤트 핸들러 삽입
    increaseCounter = () => {
        // state 값 1 증가
        // state 값 변경할 때는 this.setState() 사용
        this.setState({
            number : this.state.number + 1
        });
    };
    decreaseCounter = () => {
        // state 값 1 감소
        this.setState({
            number : this.state.number - 1
        });
    };
    render() {
        return (
            <div>
                <h2>카운터</h2>
                <div>값 : {this.state.number}</div>
                <button onClick={this.increaseCounter}> + </button> &nbsp;
                <button onClick={this.decreaseCounter}> - </button> &nbsp;
                {/* 버튼에 직접 함수 포함 가능 */}
                <button
                onClick = { () => {
                    this.setState({
                        number : this.state.number + 10
                    })
                }}>
                 + 10 </button> &nbsp;
                <button
                onClick = { () => {
                    this.setState({
                        number : this.state.number - 10
                    })
                }}>
                 - 10 </button>
            </div>
        );
    }
}

export default Counter;