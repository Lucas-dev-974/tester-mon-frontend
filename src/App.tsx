import { createSignal, type Component, createEffect } from "solid-js";
import GameService from "./services/GameService";
import Button, { colorEnum } from "./components/atoms/button/Button";

import DataTable from "./components/organism/Table";
import Modal from "./components/molecul/modal/Modal";

const App: Component = () => {
  const [data, setData] = createSignal([]);

  const [isOpenAddGame, setIsOpenAddGame] = createSignal(false);
  const toggleIsOpenAddGame = () => setIsOpenAddGame((bool) => !bool);

  createEffect(async () => {
    setData(await GameService.getAll());
  });

  const headLabels = ["Nom", "Editeur", "Nombre de joueur", "Action"];

  return (
    <main class="container mx-auto mt-10">
      <Button
        label="Ajouter un jeux"
        color={colorEnum.green}
        onClick={toggleIsOpenAddGame}
      />

      <Modal isOpen={isOpenAddGame} onClose={toggleIsOpenAddGame}>
        test
      </Modal>

      <DataTable items={data()} fields={headLabels} />
    </main>
  );
};

export default App;
