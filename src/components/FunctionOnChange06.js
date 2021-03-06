import React, { useState } from "react";

const FunctionOnChange06 = () => {
  //1.useState 상태 정의
  const [msg, setMsg] = useState("");

  //3. 기능 함수 분리
  const onMsgChange = (e) => {
    setMsg(e.target.value);
    console.log(msg);
  };

  return (
    <div>
      {/* 2.input 태그에 변화된 상태 함수 적용 */}
      <input type='text' value={msg} onChange={onMsgChange} />
      {/* 결과값 : input 창에 찍히는 문자열만큼 계속 콘솔에 찍힘 */}
    </div>
  );
};

export default FunctionOnChange06;
