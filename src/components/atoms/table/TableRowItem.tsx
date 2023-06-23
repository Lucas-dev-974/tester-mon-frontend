export interface TableRowItemProps {
  label: string;
}

export default function (props: TableRowItemProps) {
  return (
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
      {props.label}
    </td>
  );
}
