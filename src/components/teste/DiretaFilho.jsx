function DiretaFilho(props) {
    return (
        <div>
            <span>{props.text} </span>
            <span>
                <strong>{props.number} </strong>
            </span>
            <span>{props.bool ? "True" : "False"}!</span>
        </div>
    );
}

export default DiretaFilho;
