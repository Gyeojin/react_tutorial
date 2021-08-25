//App.js로 연결할 커스텀 컴포넌트
import React from "react";

//컴포넌트의 이름은 파일의 이름이자 함수의 이름이 된다.
//return 안에 들어가는 html 코드를 jsx(javascript xsm)라고 한다.
//만들어진 컴포넌트는 export 명령으로 다른 파일에 전달할 수 있다.
//컴포넌트의 jsx는 최상위 태그 하나로 감싸야 한다.
//<></> 형태로 감싸는 것을 fragment라 한다. (최상위 태그)
//함수형
const FirstComponent01 = () => {
  return (
    <div>
      <h1>My First Component</h1>
    </div>
  );
};

export default FirstComponent01; //자바스크립트 return 구문과 같음 (값을 빼내옴)
