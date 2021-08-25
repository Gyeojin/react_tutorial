import React from "react";
import FirstComponent01 from "./components/FirstComponent01";
import SecondComponent02 from "./components/SecondComponent02"; //컴포넌트 함수를 연결시켜줌
import ComponentProps03 from "./components/ComponentProps03";

// const arr = [1, 2, 3];
// arr.map((a) => {
//   return a;
// });

// //내가 만든 컴포넌트 > App.js > index.js > index.html (화면에 보여지는 문서)
// //페이지를 새로 만드는게 아니라 한 화면에서 계속 변경한다
function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <FirstComponent01 />
      <SecondComponent02 /> {/* 컴포넌트 함수를 직접 써줘야 html로 삽입 */}
      <ComponentProps03 name='jin' age={20} />
      {/*함수형 컨포넌트 연결/문자는 작은따옴표, 숫자는 중괄호*/}
    </div>
  );
}

export default App;

//단축키 : rsc (함수형 컴포넌트)
// import React from "react";

// const App = () => {
//   return <div></div>;
// };

// export default App;

//단축키 : clg
// console.log(object);
