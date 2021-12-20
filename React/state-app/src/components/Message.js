import React, {useState} from 'react';
// { Component } 클래스 없음.
// { useState } 포함 (모듈을 import 했음)

const Message = () => {
    const [message, setMessage] = useState('');
    // 이벤트 핸들러 추가
    // lambda 식 한 줄이라 { } 생략
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');
    const onClickClear = () => setMessage('');
    // 색상 변경 state
    const [color, setColor] = useState('black');
    // 이벤트 핸들러 추가
    const onClickGreen = () => setColor('green');
    const onClickRed = () => setColor('red');
    const onClickBlue = () => setColor('blue');
    return (
        <div>
            <p></p>
            {/* 출력되는 message 문자열 변경 버튼 */}
            <button onClick={onClickEnter}> 입장 </button> &nbsp;
            <button onClick={onClickLeave}> 퇴장 </button> &nbsp;
            <button onClick={onClickClear}> 지우기 </button>
            {/* 출력되는 message 색상 변경 버튼 추가 : green, red, blue */}
            <br /><br />
            <button style={ {color : 'green'} } onClick={onClickGreen}> Green </button> &nbsp;
            <button style={ {color : 'red'} } onClick={onClickRed}> Red </button> &nbsp;
            <button style={ {color : 'blue'} } onClick={onClickBlue}> Blue </button> &nbsp;
            <button onClick={ () => setColor('black') }> Black </button>
            {/* style={ {color} } {color}를 감싸는 {}는 style 적용을 위한 {}이고, color를 감싸는 {}는 변수 처리를 위한 {}이다. */}
            <h1 style={ {color} }> {message} </h1>
            <br /><br /><br /><br /><br />
        </div>
    );
};
export default Message;