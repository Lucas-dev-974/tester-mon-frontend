import type { Component } from "solid-js";

import DataTable from "./components/Table";

const App: Component = () => {
  return (
    <main class="container mx-auto mt-10">
      <DataTable />
    </main>
  );
};

export default App;
