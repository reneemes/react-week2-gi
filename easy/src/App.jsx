import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <p>Current count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Up</button>
        <button onClick={() => setCount((count) => count - 1)}>Down</button>
      </div>
    </>
  )
}

export default App;
