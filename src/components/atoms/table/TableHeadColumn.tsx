interface TableHeadColumnProps {
  label: string;
}

export default function (props: TableHeadColumnProps) {
  return (
    <th class="px-3 py-3.5 text-left text-sm font-semibold text-white">
      {props.label}
    </th>
  );
}
