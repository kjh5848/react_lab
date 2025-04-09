/**
 * 컴포넌트에 ref 연결도 가능하지만, forwardRef를 사용해야 합니다.
 */

import React from 'react'
import { useRef } from 'react';

export const Ex07 = () => {

    const MyInput = React.forwardRef((props, ref) => {
        return <input ref={ref} {...props} />;
    });

    const inputRef = useRef();

    return (
        <>
        <MyInput ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>포커스</button>
        </>
    );
}
