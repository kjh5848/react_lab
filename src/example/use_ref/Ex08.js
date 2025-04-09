/**
 * 입력창 포커스 제어

버튼 클릭 시 하단 요소로 스크롤

입력 기록을 저장 (ref를 통해 저장소 역할)

요소의 크기 측정 (ref로 DOM 정보 가져오기)
 * =================================
 * 입력창에 자동으로 포커스가 감

입력 후 Enter 또는 버튼 클릭 시:

입력값이 저장됨

하단으로 스크롤됨

박스 영역 크기를 측정해서 보여줌

ref가 다양한 용도로 쓰이는 걸 한눈에 볼 수 있어요.
 */

// 4단계
import React, { useRef, useState, useEffect } from "react";

export const Ex08 = () => {
    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const logRef = useRef([]);
    const boxRef = useRef(null)
    const [boxSize, setBoxSize] = useState({width: 0, height:0})
    const [input, setInput] = useState("");
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(()=>{
        if(boxRef.current){
            const {offsetWidth, offsetHeight} = boxRef. current;
            setBoxSize({width: offsetWidth, height:offsetHeight});
        }
    },[logs])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        logRef.current.push(input); // 값 저장은 ref에
        setLogs([...logRef.current]); // 렌더링용 상태 업데이트
        setInput("");
        
        inputRef.current.focus();

        setTimeout(()=>{
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
        },100)
    };

    return (
        <>
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
                maxHeight: 150,
                overflowY: "auto",
                border: "1px solid #aaa",
                padding: 10,
                marginTop: 20,
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
                ✅박스크기 : {boxSize.width}px × {boxSize.height}px
            </p>
            </div>
        </>
    );
};

// 3단계
// import React, { useRef, useState, useEffect } from "react";

// export const Ex08 = () => {
//     const bottomRef = useRef(null);
//     const inputRef = useRef(null);
//     const [input, setInput] = useState("");
//     const [logs, setLogs] = useState([]);

//     useEffect(() => {
//             inputRef.current.focus();
//     }, []);

//     useEffect(() => {
//         bottomRef.current.scrollIntoView({ behavior: "smooth" });
//     }, [logs]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (input.trim() === "") return;

//         setLogs([...logs, input]);
//         setInput("");
//         inputRef.current.focus();
//     };

//     return (
//         <>
//         <div>
//             <form onSubmit={handleSubmit}>
//             <input
//             ref={inputRef}
//                 type="text"
//                 placeholder="문자 입력"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             ></input>

//             <button type="submit">저장</button>
//             </form>

//             <ul>
//             {logs.map((log, idx) => (
//                 <li key={idx}>{log}</li>
//             ))}
//             <div ref={bottomRef}></div>
//             </ul>
//         </div>
//         </>
//     );
// };




// // 2단계
// import React, { useRef, useState, useEffect } from "react";

// export const Ex08 = () => {
//     const inputRef = useRef(null); // 추가
//     const [input, setInput] = useState("");
//     const [logs, setLogs] = useState([]);

//     useEffect(() => {
//       inputRef.current.focus(); // 처음 로드 시 포커스
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (input.trim() === "") return;

//         setLogs([...logs, input]);
//         setInput("");
//         inputRef.current.focus(); // 입력 후 포커스 복원
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                 ref={inputRef}
//                 type='text'
//                 placeholder='문자 입력'
//                 value={input}
//                 onChange={(e)=> setInput(e.target.value)}>
//                 </input>
            
//                 <button type='submit'>저장</button>
//             </form>

//             <ul>
//                 {logs.map((log, idx) => (
//                     <li key={idx}>{log}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };








// 1단계
// import React, { useState } from 'react'

// export const Ex08 = () => {
//     const [input, setInput] = useState("")
//     const [logs, setLogs] = useState([])

//     const handleSubmit = (e)=> {
//         e.preventDefault();
//         if(input.trim() ===""){
//             alert("값을 입력하세요.")
//             return
//         }

//         setLogs([...logs, input])
//         setInput("")
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                 type='text'
//                 placeholder='문자 입력'
//                 value={input}
//                 onChange={(e)=> setInput(e.target.value)}>
//                 </input>
            
//                 <button type='submit'>저장</button>
//             </form>

//             <ul>
//                 {logs.map((log, idx) => (
//                     <li key={idx}>{log}</li>
//                 ))}
//             </ul>
//         </div>
        
//     )
// }



