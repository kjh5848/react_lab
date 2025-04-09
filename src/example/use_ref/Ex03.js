import React ,{useState, useRef}from 'react'

export const Ex03 = () => {
  const noInput = useRef(null)
  const [no, setNo] = useState("")

  const [recordedNos, setRecordedNos] = useState([
    1,2,3,56,7,77,1,1,23,45,10
  ])

  const saveNo = () => { 
    if(no===''){
      alert('숫자를 입력하세요.')
      return
    };

    setRecordedNos([...recordedNos, no]);
    setNo(" ");
    noInput.current.focus();
    }

    const removeNo =(index)=>{
      const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
      setRecordedNos(newRecordedNos); 
    }

    const modefyNo = (index, newNo) => {
      const newRecordedNos = recordedNos.map((el, _index) =>
        _index == index ? newNo : el
      );
      setRecordedNos(newRecordedNos);
    }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInput}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        ></input>
        <button type="submit">기록</button>
      </form>

      <ul>
        {recordedNos.map((el, index) => (
          <li key={index} style={{display:"flex", gap:20}}>
            <span>{index} :</span>
            <span>{el}</span>
            <button onClick={() => removeNo(index)}>삭제</button>
            <button onClick={() => modefyNo(index, el + 1)}>+1</button>
            <button onClick={() => modefyNo(index, el - 1)}>-1</button>
            <button onClick={() => modefyNo(index, 0)}>0</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
