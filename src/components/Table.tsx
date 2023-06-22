import ItemTable from "./ItemTable";
import { ItemProps } from "./ItemTable";

interface tableProps {
  items: ItemProps[];
}

const DataTable = (props: tableProps) => {
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
        {props.items.map((item) => (
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
