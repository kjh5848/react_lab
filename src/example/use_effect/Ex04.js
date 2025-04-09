/*
윈도우 창 크기를 실시간으로 감지해서 표시하는 예제"
useEffect로 이벤트 리스너 등록
resize 이벤트 감지
창 크기가 바뀔 때마다 상태 업데이트
컴포넌트가 사라지면 이벤트 정리(clean-up) 도 같이 수행
useEffect로 이벤트 리스너 등록
resize 이벤트 감지
창 크기가 바뀔 때마다 상태 업데이트
컴포넌트가 사라지면 이벤트 정리(clean-up) 도 같이 수행
*/

import React, { useEffect, useState } from 'react'


function WindowSizeTracker() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            console.log("창크기가 변경됨");
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("창크기 감지기 해제됨");
        };
    }, []);

    return (
        <div>
            <h3>현재 창 크기</h3>
            <p>가로: {size.width}px</p>
            <p>세로: {size.height}px</p>
        </div>
    );
}

export const Ex04 = () => {
    const [show, setShow] = useState(true);

    return (
        <div style={{ padding: 20 }}>
            <h2>창크기 실시간 추적</h2>
            <button onClick={() => setShow(!show)}>
                {show ? "숨기기" : "보이기"}
            </button>
            {show && <WindowSizeTracker />}
        </div>
    );
}
