// 스크롤 조작
import React, { useRef } from "react";

export const Ex05 = () => {
    
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
        <div style={{ height: "300px", overflowY: "scroll" }}>
            {/* 긴 리스트 */}
            <div style={{ height: "1000px" }}></div>
            <div ref={scrollRef}>🧷 여기가 끝입니다</div>
        </div>
        <button onClick={scrollToBottom}>끝으로 스크롤</button>
        </div>
    );

}
