import './App.css';
import {useState} from "react";
import RandomMumber from "./components/RandomNumber";
import Button from "./components/Button";
import Counter from "./components/Counter";



function App() {
    const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RandomMumber/>
      <Counter count={count}/>
      <Button count={count} onClick={setCount} />
      <Button count={count} onClick={setCount} />
      <Button count={count} onClick={setCount} />
      <Button count={count} onClick={setCount} />

    </div>
  );
}

export default App;
