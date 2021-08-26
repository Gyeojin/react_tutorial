import React from "react";

const MapFunction07 = () => {
  //const arr = [1, 2, 3, 4, 5, 6, 7];
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  //2.forEach 함수 사용법
  // const arr1 = arr.forEach((number) => {
  //   console.log(number);
  // });

  //3.Map 함수 사용법
  // const arr1 = arr.map((number) => {
  //   return number;
  // });
  // console.log(arr1);

  const names = ["먹밥", "토끼", "푸두", "느린아이"];
  //1. map을 이용해 각각의 배열 요소를 추가
  //2. 각각의 요소에 키 속성 지정 (idx 값을 받아 key값을 정해줘야 오류창이 없어짐.)
  const nameList = names.map((name, idx) => <li key={idx}>{name}</li>);

  return <ul>{nameList}</ul>;
};

export default MapFunction07;
