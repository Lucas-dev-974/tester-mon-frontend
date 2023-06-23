import { For, Show } from "solid-js";
import { TableActionEnum } from "./TableRow";
import Button, { colorEnum } from "../../atoms/button/Button";

interface TableRowItemActionProps {
  haveAction: boolean;
  actions: TableActionEnum[];
}

export default function (props: TableRowItemActionProps) {
  const deleteAction = () => {
    console.log("delete");
  };

  const updateAction = () => {
    console.log("update");
  };

  return (
    <Show when={props.haveAction}>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300 flex gap-3">
        <For each={props.actions}>
          {(action) => (
            <Button
              label={action}
              color={colorEnum.green} // Remplacez par la couleur souhaitée
              onClick={
                action == TableActionEnum.delete ? deleteAction : updateAction
              }
            />
          )}
        </For>
      </td>
    </Show>
  );
}
