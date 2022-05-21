function FamiliaMembro(props) {
    return (
        <div>
            {props.name}
            <strong>{props.lastName}</strong>
        </div>
    );
}

export default FamiliaMembro;
