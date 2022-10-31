

const Subordinates = props => {

    const ID = props.ID;
    const Name = props.Name;
    const LastName = props.LastName;


    return (
        <div>
            <tr>
                <td >{Name}</td>
                <td>{LastName}</td>
                <td><button className='assignbtn'>Assign Task</button></td>
            </tr>
        </div>
    )
}
export default Subordinates;