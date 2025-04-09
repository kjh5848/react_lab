import React, { useRef, useState, useEffect } from "react";

export const Ex09 = () => {
    const inputRef = useRef(null); // 1. input에 포커스 주기
    const logRef = useRef([]); // 2. 입력 값 저장용
    const bottomRef = useRef(null); // 3. 스크롤 이동 대상
    const boxRef = useRef(null); // 4. DOM 요소 크기 측정
    const [input, setInput] = useState("");
    const [logs, setLogs] = useState([]);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    // 초기 포커스
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // boxRef 크기 측정
    useEffect(() => {
        if (boxRef.current) {
        const { offsetWidth, offsetHeight } = boxRef.current;
        setBoxSize({ width: offsetWidth, height: offsetHeight });
        }
    }, [logs]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim() === "") {
        alert("내용을 입력하세요!");
        return;
        }

        // 입력값 저장
        logRef.current.push(input);
        setLogs([...logRef.current]);
        setInput("");

        // 포커스 복구
        inputRef.current.focus();

        // 하단으로 스크롤
        setTimeout(() => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <div>
        <h2>🧠 Ref를 활용한 고급 예제</h2>

        <form onSubmit={handleSubmit}>
            <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="내용을 입력하세요"
            />
            <button type="submit" style={{ marginLeft: 10 }}>
            저장
            </button>
        </form>

        <div
            ref={boxRef}
            style={{
            marginTop: 20,
            padding: 10,
            border: "1px solid #aaa",
            maxHeight: 150,
            overflowY: "auto",
            }}
        >
            <strong>📋 입력 로그:</strong>
            <ul>
            {logs.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
            </ul>
            <div ref={bottomRef} />
        </div>

        <p style={{ marginTop: 10 }}>
            📏 Box 크기: {boxSize.width}px × {boxSize.height}px
        </p>
        </div>
    );
};
