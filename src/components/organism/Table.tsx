import TableBody from "../molecul/table/TableBody";
import TableHead from "../molecul/table/TableHead";
import { TableActionEnum } from "../molecul/table/TableRow";
import { ItemProps } from "../molecul/table/TableRow";

interface tableProps {
  fields: string[];
  items: ItemProps[];
}

const DataTable = (props: tableProps) => {
  return (
    <table class="min-w-full divide-y divide-gray-700">
      <TableHead fields={props.fields} />
      <TableBody
        items={props.items}
        haveAction={true}
        actions={[TableActionEnum.delete, TableActionEnum.edit]}
      />
    </table>
  );
};

export default DataTable;
