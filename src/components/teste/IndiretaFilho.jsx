function IndiretaFilho(props) {
    const c = props.click;
    const generateAge = () => parseInt(Math.random() * (80 - 20)) + 20;
    const generateNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button
                onClick={(_) => {
                    c("Luis", generateAge, generateNerd);
                }}
            >
                Fornecer Informações
            </button>
        </div>
    );
}

export default IndiretaFilho;
