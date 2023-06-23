import { mergeProps } from "solid-js";
import TableRow, { ItemProps, TableActionEnum } from "./TableRow";

export interface TableBodyProps {
  items: ItemProps[];
  haveAction?: boolean;
  actions: TableActionEnum[];
}

export default function (props: TableBodyProps) {
  const mergedProps = mergeProps({ haveAction: false, actions: [] }, props);

  return (
    <tbody>
      {props.items.map((item) => (
        <TableRow
          id={item.id}
          name={item.name}
          editor={item.editor}
          nb_players={item.nb_players}
          haveAction={mergedProps.haveAction}
          actions={mergedProps.actions}
        />
      ))}
    </tbody>
  );
}
