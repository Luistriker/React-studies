import DiretaFilho from "./DiretaFilho";

function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho text="Filho 1" number={20} bool={true} />
            <DiretaFilho text="Filho 2" number={64} bool={false} />
        </div>
    );
}

export default DiretaPai;
