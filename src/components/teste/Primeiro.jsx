import styles from "../../styles/Primeiro.css";

export default function Primeiro(props) {
    const status = props.great >= 1 ? "Chifre grande" : "Chifre curto";
    return (
        <div>
            <h3>
                {props.tittle} {props.subtittle} numero {props.great}
            </h3>
            <p>{status}</p>
        </div>
    );
}
