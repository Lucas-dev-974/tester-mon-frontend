import { createSignal, onCleanup, on } from "solid-js";
import { Component, createEffect } from "solid-js";
import ItemTable from "./ItemTable";
import { ItemProps } from "./ItemTable";

import gameserive from "../services/gameFetch";

const DataTable = () => {
  const [data, setData] = createSignal<ItemProps[]>([]);

  // Fonction pour récupérer les données du tableau (par exemple, à partir d'une API)
  const fetchData = async () => {
    // Effectuer une requête API ou obtenir les données d'une autre source
    const response = await fetch("https://api.example.com/data");
    const jsonData = await response.json();
    setData(jsonData);
  };

  createEffect(async () => {
    // await fetchData()
    setData([
      {
        id: 1,
        name: "string",
        editor: "string",
        nb_players: 1,
      },
      {
        id: 1,
        name: "string",
        editor: "string",
        nb_players: 1,
      },
    ]);

    console.log(await gameserive.getAll());
  });

  return (
    <table class="min-w-full divide-y divide-gray-700">
      <thead>
        <tr>
          <th class="px-3 py-3.5 text-left text-sm font-semibold text-white">
            Nom
          </th>
          <th class="px-3 py-3.5 text-left text-sm font-semibold text-white">
            Editeur
          </th>
          <th class="px-3 py-3.5 text-left text-sm font-semibold text-white">
            Nombre de joueur
          </th>
        </tr>
      </thead>
      <tbody>
        {data().map((item) => (
          <ItemTable
            id={item.id}
            name={item.name}
            editor={item.editor}
            nb_players={item.nb_players}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
