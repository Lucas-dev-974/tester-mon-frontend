import { For, Show, splitProps } from "solid-js";
import TableRowItem from "../../atoms/table/TableRowItem";
import TableRowItemAction from "./TableRowItemAction";

export enum TableActionEnum {
  edit = "editer",
  delete = "supprimer",
}

export interface ItemProps {
  id: number;
  name: string;
  editor: string;
  nb_players: number;

  haveAction: boolean;
  actions: TableActionEnum[];
}

export default function (props: ItemProps) {
  const [local, fields] = splitProps(props, ["id", "haveAction", "actions"]);

  return (
    <tr>
      <For each={Object.keys(fields)}>
        {(key) => (
          <TableRowItem label={fields[key as keyof typeof fields] as string} />
        )}
      </For>

      <TableRowItemAction
        haveAction={local.haveAction}
        actions={local.actions}
      />
    </tr>
  );
}
