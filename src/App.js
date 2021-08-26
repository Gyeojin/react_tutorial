import React from "react";
// import FirstComponent01 from "./components/FirstComponent01";
//import SecondComponent02 from "./components/SecondComponent02"; //컴포넌트 함수를 연결시켜줌+경로지정까지!
// import ComponentProps03 from "./components/ComponentProps03";
// import UseState04 from "./components/UseState04";
// import ClassOnChange05 from "./components/ClassOnChange05";
// import FunctionOnChange06 from "./components/FunctionOnChange06";
// import MapFunction07 from "./components/MapFunction07";
// import MultiState08 from "./components/MultiState08";
// import CounterApp09 from "./components/CounterApp09";
// import UseEffect10 from "./components/UseEffect10";
import AddDelList11 from "./components/AddDelList11";

// const arr = [1, 2, 3];
// arr.map((a) => {
//   return a;
// });

// //내가 만든 컴포넌트 > App.js > index.js > index.html (화면에 보여지는 문서)
// //페이지를 새로 만드는게 아니라 한 화면에서 계속 변경한다
function App() {
  return (
    <div className='App'>
      {/* <h1>Hello World</h1> */}
      {/* <FirstComponent01 />
      <SecondComponent02 /> 컴포넌트 함수를 직접 써줘야 html로 삽입 */}
      {/* <ComponentProps03 name='jin' age={20} /> */}
      {/*함수형 컨포넌트 연결/문자는 작은따옴표, 숫자는 중괄호*/}
      {/* <UseState04 /> */}
      {/* <ClassOnChange05 /> */}
      {/* <FunctionOnChange06 /> */}
      {/* <MapFunction07 /> */}
      {/* <MultiState08 /> */}
      {/* <CounterApp09 /> */}
      {/* <UseEffect10 /> */}
      <AddDelList11 />
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
