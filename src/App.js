import React from "react";
import { Ex05 } from './example/use_effect/Ex05';

/**
 * 컴포넌트 처음 마운트될 때만 실행 (한 번만 실행)
 * []를 두 번째 인자로 넣으면 → 처음 한 번만 실행
 */
//

function App() {
  return (
    <div style={{padding: '100px'}}>
      <h1>React Study</h1>
      <Ex05 />
    </div>
  );
}

export default App;
