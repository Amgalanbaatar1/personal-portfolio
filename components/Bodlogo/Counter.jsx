import { useState } from "react";

export function Counter() {
  const [count, setCounter] = useState(1);

  const add = () => {
    setCounter(count + 1);
  };

  const minus = () => {
    setCounter(count - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <p>Count:{count}</p>
      <button onClick={add} className="border bg-blue-500 w-14 rounded">
        +
      </button>
      <button onClick={minus} className=" border bg-red-500 w-14 rounded">
        -
      </button>
    </div>
  );
}
