import { useState } from "react";

export default function Calc() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [input, setInput] = useState("");

  function addData() {
    if (input === "") return;
    setData([...data, Number(input)]);
    setInput("");
  }

  function sumr() {
    const total = data.reduce((acc, val) => acc + val, 0);
    setSum(total);
  }

  function maxr() {
    if (data.length === 0) return;
    const maxValue = Math.max(...data);
    setMax(maxValue);
  }

  function avgr() {
    if (data.length === 0) return;
    const total = data.reduce((acc, val) => acc + val, 0);
    setAverage(total / data.length);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>useState Example</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={addData}>Add</button>

      <p>Data: {JSON.stringify(data)}</p>

      <div>
        <button onClick={sumr}>Sum</button>
        <span> Sum: {sum}</span>
      </div>

      <div>
        <button onClick={maxr}>Max</button>
        <span> Max: {max}</span>
      </div>

      <div>
        <button onClick={avgr}>Average</button>
        <span> Average: {average}</span>
      </div>
    </div>
  );
}
