import styles from "../styles/Input.module.css";
import { useState } from "react";

function Input() {
    const [value, setValue] = useState("initial");

    function change(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <h2>{value}</h2>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={change}
            />
            <input
                className={styles.input}
                type="text"
                value={value}
                readOnly
            />
            <input className={styles.input} type="text" value={undefined} />
        </div>
    );
}

export default Input;
