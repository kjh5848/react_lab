/**
 * 컴포넌트 사라질 때(clean-up) 처리
 * return () => { ... } 이 부분은 컴포넌트가 화면에서 사라질 때 실행됨
 */
import React, { useEffect, useState } from "react";

const Timer = ()=> {
    useEffect(()=> {
        const timer = setInterval(()=> {
        console.log(" ⏲️ 1초 마다 실행")
        }, 1000   )

        return () => {
            clearInterval(timer);
            console.log("컴포넌트가 사라질 때 정리됨");
        }
    },[])

    return <h3>⏲️타이머 작동 중</h3>
}


export const Ex03 = () => {
    const [show, setShow] = useState(true);

    
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? '숨기기' : '보이기'}
            </button>
                {show && <Timer />}
        </div>
    )
}

