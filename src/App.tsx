import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
interface CounterProps {
  count: number;
}

function Counter({ count }: CounterProps) {
  return (<div>
    <p>Count: {count}</p>
  </div>)
}
 
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>+</button>
        <Counter count={count}/>
        <button onClick={() => setCount(count - 1)}>-</button>
      </header>
    </div>
  );
}

export default App; 
