export default function (props: {
  id: number;
  name: string;
  editor: string;
  nb_players: number;
}) {
  return (
    <tr>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
        {" "}
        {props.name}{" "}
      </td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
        {" "}
        {props.editor}{" "}
      </td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
        {" "}
        {props.nb_players}{" "}
      </td>
    </tr>
  );
}
