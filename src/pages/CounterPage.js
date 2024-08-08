import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

const CounterPage = ({ initialCount }) => {
  const { count, handleDecrement, handleIncrement } = useCounter(initialCount);

  return (
    <div>
      <h1>Cout is: {count}</h1>
      <div className="flex">
        <Button onClick={handleIncrement} primary>
          Increment
        </Button>
        <Button className="ml-2" onClick={handleDecrement} secondary>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default CounterPage;
