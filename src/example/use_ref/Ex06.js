// setInterval / setTimeout 같은 값 저장소로 사용
import React, {useRef, useEffect} from 'react'

export const Ex06 = () => {
        
    const intervalRef = useRef(null);

    useEffect(() => {
    intervalRef.current = setInterval(() => {
        console.log("⏱ 실행 중");
    }, 1000);

    return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
        <h3>콘솔을 확인하세요! 매 1초마다 실행 중 ⏱</h3>
        </div>
    );

}
