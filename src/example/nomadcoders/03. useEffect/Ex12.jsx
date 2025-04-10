import React, { useState, useEffect } from "react";

function ex12() {
  const [counter, setCounter] = useState(0);
  const [keyword, setkeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  const onChange = (event) => {
    setkeyword(event.target.value);
  };
  
  useEffect(() => {
    console.log("콜");
  }, []);  

  useEffect(() => {
    console.log("키워드 실행",keyword);
  }, [keyword]);  

  useEffect(() => {
    console.log("카운터 실행");
  }, [counter]);

  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here ..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default Ex12;
