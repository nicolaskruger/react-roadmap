import { CounterProvider, useCounterContext } from "@/context/counter.context";

const Counter = () => {
  const { counter, less, plus } = useCounterContext();

  return (
    <div>
      <button onClick={less}>less</button>
      <p>{counter}</p>
      <button onClick={plus}>plus</button>
    </div>
  );
};
const Provider = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Provider;
