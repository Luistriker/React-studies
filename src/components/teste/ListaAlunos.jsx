import alunos from "../data/Alunos";

function ListaAlunos(props) {
    const list = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.name} - {aluno.great}
            </li>
        );
    });
    return (
        <div>
            <ul style={{ listStyle: "none" }}>{list}</ul>
        </div>
    );
}

export default ListaAlunos;
