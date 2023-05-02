import { useCallback, useRef, useState } from "react";

const Ref = () => {
  const [status, setStatus] = useState<"start" | "stop">("start");

  const [count, setCount] = useState(0);

  const intervalRef = useRef<NodeJS.Timer>({} as NodeJS.Timer);

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCount((count) => ++count);
    }, 1000);
  }, [count]);

  const stop = () => {
    clearInterval(intervalRef.current as NodeJS.Timer);
  };

  const toggleState = useCallback(() => {
    if (status === "start") {
      setStatus("stop");
      start();
    } else {
      setStatus("start");
      stop();
    }
  }, [status]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={toggleState}>{status}</button>
    </div>
  );
};

export default Ref;
