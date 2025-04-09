import React, { useState, useRef } from "react";

function Ex01() {
  const formInputNoRef = useRef(null); // 입력 필드에 접근하는 ref
  const [no, setNo] = useState(""); // 입력된 숫자 상태 관리

  const notice = () => {
    formInputNoRef.current.focus(); // 입력 필드에 포커스

    if (!no) {
      alert("숫자를 입력해주세요.");
      return;
    }

    alert(`당신이 입력한 숫자는 ${no} 입니다.`);
    setNo(""); // 입력 필드 초기화
  };

  return (
    <div className="container">
      <h2>숫자 입력기</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          notice();
        }}
      >
        <input
          ref={formInputNoRef} // useRef를 사용한 입력 필드
          type="text"
          placeholder="숫자 입력"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        />
        <button type="submit">실행</button>
      </form>
    </div>
  );
}

export default Ex01;
