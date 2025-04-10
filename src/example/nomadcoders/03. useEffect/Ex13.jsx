import React, { useState, useEffect } from "react";

function HelloV1() {
  useEffect(() => {
    console.log("여기야")
  
    return () => {
      console.log("죽음.")
    }
  }, [])
  return<h1>Hello</h1>
}

function HelloV2() {
  function hiFn() {
    console.log("hi")
    return byFn;
  }

  function byFn() {
    console.log("bye")
    return <h1>bye</h1>;
  }
  
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function Ex13() {
  const [showing, setShowing] = useState(false)

  const onClick = () => { setShowing((prev) => !prev) }

  return (
    <div>
      {showing ? <HelloV1 /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default Ex13;
