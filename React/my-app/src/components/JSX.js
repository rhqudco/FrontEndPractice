import React, { Component } from 'react';

class JSX extends Component {
    render() {
    // 자바스크립트 코드 영역
    const name = '홍길동';
    const num = 0;
    const value = 1;


 // 변수 : 사용자 정의 객체
    const person = {
        name:'성춘향',
        age:20
    };
 // 자바스크립트 내부 함수
    function getPerson() {
        return person.name + ", " + person.age;
    }
 return (
        <div>
            {/* JSX 문법 영역 */}
            <h2>JSX 입니다.</h2>
            <h2>{name} 안녕!</h2>
            {/* 조건(삼항) 연산자 */}
            {/* 조건? true : false */}
            { name === '홍길동' ? (
            <h3>홍길동입니다.</h3>
            ) : (
            <h3>홍길동이 아닙니다.</h3>
            )}
            { name === '이몽룡' ? (<h3>이몽룡 입니다.</h3>) : (<h3>이몽룡이 아닙니다.</h3>) }
            { name === '홍길동' && <h3>홍길동 입니다.</h3>}
            { num || '값이 undefined 입니다.'}
            {/* 인라인 스타일링 : 카멜 표기법 */}
            <div
                style= {{
                    width:'50%',
                    backgroundColor:'red',
                    color:'white',
                    fontSize:'36px',
                    fontWeight:'bold',
                    padding:10,
                    marginTop:'20px'
                }}
                >인라인 스타일 적용!</div>

                {/* class 대신 className 사용 */}
                <div className='rect'>class style 적용</div>

                {/* 태그는 반드시 닫아야 함 */}
                <br />
                주소 : 서울 <br />
                전화 : 010-1111-1111 <br />
                <input type="password" />

                {/* JSX 내에 자바스크립트 if문 사용 가능한 방법 */}
                <div>
                    {
                        (function() {
                            if(value == 1) return <div>1 입니다.</div>
                            if(value == 2) return <div>2 입니다.</div>
                            if(value == 3) return <div>3 입니다.</div>
                        })() // <= () 에서 함수 호출이 이루어짐. (함수 자동 호출 ( function () { .... })() )
                    }
                </div>
                {/* JSX 내에 자바스크립트 if문 사용 가능한 방법 화살표 함수 */}
                <div>
                    {
                        ( () => {
                            if(value == 1) return <div>1 입니다.</div>
                            if(value == 2) return <div>2 입니다.</div>
                            if(value == 3) return <div>3 입니다.</div>
                        })() // <= () 에서 함수 호출이 이루어짐. (함수 자동 호출 ( function () { .... })() )
                    }
                </div>
                {/* render 영역 함수 사용 법 */}
                {/* 얘는 안됨. */}
                <div>getPerson()</div> <br />
                {/* 얘는 된다. */}
                <div>{ getPerson() }</div> <br />
        </div>
        );
    }
}

export default JSX;