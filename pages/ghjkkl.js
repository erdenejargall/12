import { useState } from 'react';

export default function Calc() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [num, setNum] = useState('');

  const sumr = (a, b) => setSum(a + b);
  const maxr = (a, b, c) => setMax(Math.max(a, b, c));
  const averager = (a, b, c) => setAverage((a + b + c) / 3);

  const datar = () => {
    const newData = [...data];
    newData.push(Number(num));
    setData(newData);
    setNum('');
  };

  const Submit = () => {
    if (data.length >= 3) {
      sumr(data[0], data[1]);
      maxr(data[0], data[1], data[2]);
      averager(data[0], data[1], data[2]);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={datar} className='w-24 h-12 border-2 mx-4'>Add</button>

      <button onClick={Submit} className='w-24 h-12 border-2'>Submit</button>

      <p>
        Sum: <span>{sum}</span>
      </p>
      <p>
        Max: <span>{max}</span>
      </p>
      <p>
        Average: <span>{average}</span>
      </p>
    </div>
  );
}