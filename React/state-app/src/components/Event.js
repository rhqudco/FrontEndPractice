import React, { Component } from 'react';

class Event extends Component {
    state = {
        message: '',
        id : '',
        pass : ''
    }
    // 이벤트 핸들러
    onChange = e => {
        this.setState({
            message: e.target.value
        })
    };
    // id 값 변경하는 이벤트 핸들러
    onIdChange = e => {
        this.setState({
            id: e.target.value
        })
    };

    // pass 값 변경하는 이벤트 핸들러
    onPassChange = e => {
        this.setState({
            pass: e.target.value
        })
    };

    // 완료 버튼 클릭했을 때 이벤트 핸들러
    // id와 pass 값을 alert()로 출력
    onShow = () => {
        alert('ID는 ' + this.state.id + '입니다. 비밀번호는 ' + this.state.pass + "입니다.");
    };

    render() {
        return (
            <div>
                <hr />
                <h3>이벤트 연습</h3>
                <input type="text" name='message'
                        onChange={this.onChange} />
                <h3>{this.state.message}</h3>
                <input type='text' name='id' size='10'
                    value={this.state.id}
                    onChange={this.onIdChange} /> &nbsp;

                <input type='password' name='pass' size='10'
                    value={this.state.pass}
                    onChange={this.onPassChange} /> &nbsp;

                <button onClick = {this.onShow}> 완료 </button>
            </div>
        );
    }
}

export default Event;