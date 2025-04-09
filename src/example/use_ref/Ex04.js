// 포커스 주기

import React, { useRef } from "react";

export const Ex04 = () => {
    const inputRef = useRef(null);

    const focusHandler = () => {
        inputRef.current.focus(); // 직접 DOM 요소 제어!
    };

    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={focusHandler}>포커스 주기</button>
        </>
    );
}

