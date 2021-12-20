import React, { Component } from 'react';

class Login extends Component {
    state = {
        id : '',
        pass : ''
    }
    onIdChange = e => {
        this.setState({
            id: e.target.value
        })
    };
    onPassChange = e => {
        this.setState({
            pass: e.target.value
        })
    };

    onShow = () => {
        if(this.state.id == 'abcd' && this.state.pass == '1234') {
            alert("로그인 성공")
        }
        else {
            alert("로그인 실패")
        }
    };
    render() {
        return (
            <div>
                아이디 : <input type='text' name='id' size='10'
                    value={this.state.id}
                    onChange={this.onIdChange} /> &nbsp;
                    <br />
                비밀번호 : <input type='password' name='pass' size='10'
                    value={this.state.pass}
                    onChange={this.onPassChange} /> &nbsp;

                <button onClick={this.onShow}> 완료 </button>
            </div>
        );
    }
}

export default Login;