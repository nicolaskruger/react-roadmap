import { useState, useTransition } from "react";

type PostProps = {
  key?: number;
};

const Posts = ({ key }: PostProps) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <p>Post {key}</p>;
};

const Page = () => {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<"about" | "post">("about");

  const setTransitionState = (newState: typeof state) => {
    startTransition(() => {
      setState(newState);
    });
  };

  type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
  };

  type Sw = EnumDictionary<typeof state, JSX.Element>;

  const sw: Sw = {
    about: <p>about</p>,
    post: (
      <>
        {"_"
          .repeat(1000)
          .split("")
          .map((_, i) => (
            <Posts key={i} />
          ))}
      </>
    ),
  };

  return (
    <div>
      <button onClick={() => setTransitionState("about")}>about</button>
      <button onClick={() => setTransitionState("post")}>post</button>
      {sw[state]}
    </div>
  );
};

export default Page;
