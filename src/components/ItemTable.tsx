export default function(props:{id:number, name:string, editor:string, nb_players:number }){

    return <tr>
        <td> {props.name} </td>
        <td> {props.editor} </td>
        <td> {props.nb_players} </td>
    </tr>
}