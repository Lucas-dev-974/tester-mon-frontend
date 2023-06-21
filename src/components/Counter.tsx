import { createSignal, type VoidComponent } from "solid-js";
export const Counter: VoidComponent = () => {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count() + 1);
  return (
    <button type="button" onClick={increment}>
      {count().toString()}
    </button>
  );
};
