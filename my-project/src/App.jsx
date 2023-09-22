import { useState } from "react";
import './index.scss'

function App() {
  const [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(count - 1);
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };


  return (
      <div>
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>- Minus</button>
        <button className="plus" onClick={onClickPlus}>Plus +</button>
      </div>
  )
}

export default App
