import React, { useState } from "react";

const CounterApp09 = () => {
  //1. 초기 상태 배열 비구조화 할당
  const [number, setNumber] = useState(0);
  //2. 증가 상태 변화 함수 정의
  const plusNumber = () => {
    setNumber(number + 1);
  };
  //3. 감소 상태 변화 함수 정의
  const MinusNumber = () => {
    setNumber(number - 1);
  };
  //초기 상태 변수 : value => value+1;
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plusNumber}>Plus</button>
      <button onClick={MinusNumber}>Minus</button>
    </div>
  );
};

export default CounterApp09;
