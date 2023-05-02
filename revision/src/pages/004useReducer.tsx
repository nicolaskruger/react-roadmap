import { useReducer } from "react";

const counterReducer = (
  state: number,
  action: { type: "add" | "sub"; amount: number }
) => {
  switch (action.type) {
    case "add":
      return state + action.amount;
    case "sub":
      return state - action.amount;
  }
};

const MyReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <button onClick={() => dispatch({ amount: 1, type: "sub" })}>sub</button>
      <p>{state}</p>
      <button onClick={() => dispatch({ amount: 1, type: "add" })}>add</button>
    </div>
  );
};

export default MyReducer;
