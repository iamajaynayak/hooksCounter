import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevcounter) => prevcounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevcounter) => {
      if (prevcounter >= 1) {
        return prevcounter - 1;
      } else {
        return prevcounter;
      }
    });
  };
  return (
    <div className="App">
      <button onClick={decreaseCounter}>-</button>
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
}

export default App;
