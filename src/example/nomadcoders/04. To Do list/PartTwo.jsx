import React, { useState } from "react";

function PartTwo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  const onChange = (event) => setToDo(event.target.value);
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    
  };
console.log(toDos)
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="여기에 작성" />
        <button>Add to toDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PartTwo;
