import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   useCallback(() => {
  //     setCounter(counter + 1);
  //   }, []);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  const incrementFather = useCallback(() => {
    setCounter((value) => value);
  }, []);
  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
