import React from 'react';
import { useState } from "react";

const Content = () => {
    // 변수 사용도 가능
  // let title = "지금 우리 학교는"
  // state 사용하는 경우 useState() 사용 가능
  // let [title, setTitle] = useState("오징어 게임");
  // 값이 여러 개인 경우 배열로 설정
  let [titles, setTitle] = useState([
    "지금 우리 학교는",
    "오징어 게임"
  ]);

  // titles에 항목 추가  : state 값 변경
  // state 값 변경 함수 : setTitle() 함수
  const onClickAdd = () => {
    if(item === "") {
      alert("제목을 입력하세요");
    }
    else{
    // 배열에 항목 추가
    // 1. concat("추가할 내용")
    // setTitle(titles.concat(item)); // 배열에 입력된 값 item 추가
    // setItem(''); // 입력란 지우기
    // 2. 스프레드 연산자 사용 : ...titles (객체 또는 배열의 값 복제할 때 사용)
    setTitle([...titles, item])
    setItem(''); // 입력란 지우기
    }
  }

  // 입력값 저장하기 위한 state 정의
  let [item, setItem] = useState('');

  const onItemChange = e => setItem(e.target.value);

  const onItemRemove = (title, index) => {
    // 전달 받은 인덱스에 해당하는 titles의 title이 동일한 것은 제외하고 새배열로 반환
    setTitle(titles.filter((title) => titles[index] !== title));
  };
    return (
        <div className='content'>
        {
          titles.map((title, index) => (
            <div>
              <p>{index} : {title}</p>
              <button title={title} index={index} onClick={ () => onItemRemove(title, index) }>삭제</button>
              <hr/>
            </div>
          ))
        }
        <input type="text" value={item} name="item" onChange={onItemChange} />
        <button onClick={onClickAdd}>항목 추가</button>
        </div>
    );
};

export default Content;