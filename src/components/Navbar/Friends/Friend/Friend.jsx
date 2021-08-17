
const Friend = props => {

    return (
        <div>
            <ul>
                <li>{props.id}</li>
                <li>{props.name}</li>
                <li>{props.imgUrl}</li>
                <li>{props.state}</li>
            </ul>
        </div>
    )
}

export default Friend