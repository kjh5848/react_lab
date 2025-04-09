/**
 * 상태(state)가 바뀔 때마다 실행
 * useEffect(() => {...}, [count])
→ count가 바뀔 때마다 실행됨
 */

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Ex02 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`count: ${count}`)
    }, [count])

  return (
    <div>
        <p>클릭 수 : {count}</p>
        <button onClick={()=> setCount(count + 1)}> ccc</button>
    </div>
  )
}
