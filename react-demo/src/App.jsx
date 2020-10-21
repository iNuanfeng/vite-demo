import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

let sourceWindow = null

function App() {
  const [count, setCount] = useState(0);

  // 表示只执行一次
  useEffect(() => {
    window.addEventListener('message', (event) => {
      sourceWindow = event.source
      console.log('submiting...', event.data)
    }, false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React</p>
        <p>
          <button onClick={() => {
            setCount((count) => count + 1)
            sourceWindow && sourceWindow.postMessage({
              count
            }, '*')
          }}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
