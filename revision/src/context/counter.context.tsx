import { ReactNode, createContext, useContext, useState } from "react";

type ContextValue = {
  counter: number;
  plus: () => void;
  less: () => void;
};

type CounterType = {
  children?: ReactNode;
};

const CounterContext = createContext({} as ContextValue);

const CounterProvider = ({ children }: CounterType) => {
  const [counter, setCounter] = useState(0);

  const plus = () => setCounter((c) => ++c);

  const less = () => setCounter((c) => --c);

  return (
    <CounterContext.Provider value={{ counter, plus, less }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => useContext(CounterContext);

export { CounterProvider, useCounterContext };
