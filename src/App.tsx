import { createSignal, type Component, createEffect } from "solid-js";
import GameService from "./services/GameService";

import DataTable from "./components/Table";

const App: Component = () => {
  const [data, setData] = createSignal([]);

  createEffect(async () => {
    setData(await GameService.getAll());
  });

  return (
    <main class="container mx-auto mt-10">
      <DataTable items={data()} />
    </main>
  );
};

export default App;
