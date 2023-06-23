import { For } from "solid-js";
import TableHeadColumn from "../../atoms/table/TableHeadColumn";

interface TableHeadProps {
  fields: string[];
}

export default function (props: TableHeadProps) {
  return (
    <thead>
      <tr>
        <For each={props.fields}>
          {(label) => <TableHeadColumn label={label} />}
        </For>
      </tr>
    </thead>
  );
}
