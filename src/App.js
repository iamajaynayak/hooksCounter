import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const increaseCounter = () => {
    setCounter((prevcounter) => {
      console.log(prevcounter);
      return prevcounter + 1;
    });
  };

  const decreaseCounter = () => {
    setCounter((prevcounter) => {
      console.log(prevcounter);
      if (prevcounter >= 1) {
        return prevcounter - 1;
      } else {
        return prevcounter;
      }
    });
  };

  const onUsernameChanged = (event) => {
    setUsername(() => event.target.value);
  };

  const onPasswordChanged = (event) => {
    setPassword(() => event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };

  console.log(username, password);

  return (
    <div className="App">
      <div className="counter">
        <button onClick={decreaseCounter}>-</button>
        <h2>{counter}</h2>
        <button onClick={increaseCounter}>+</button>
      </div>

      <div className="input-form">
        <input
          type="text"
          className="username"
          name="username"
          placeholder="username"
          onChange={onUsernameChanged}
        />
        <input
          type="password"
          className="password"
          name="password"
          placeholder="password"
          onChange={onPasswordChanged}
        />
        <button onClick={onSubmit}>log In</button>
      </div>
    </div>
  );
}

export default App;
