import If, { Else } from "../../js/if";

function UsuarioInfo(props) {
    const user = props.user || {};
    return (
        <div>
            <If test={user && user.name}>
                Seja bem vindo <strong>{user.name}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    );
}

export default UsuarioInfo;
