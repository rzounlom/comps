import { useEffect, useState } from "react";

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Count is now: ", count);
  }, [count]);

  return {
    count,
    handleDecrement,
    handleIncrement,
  };
}
