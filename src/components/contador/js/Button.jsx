import React from "react";
import styles from "../styles/Button.module.css";

export const Button = (props) => {
    return (
        <div>
            <button className={styles.button} onClick={props.setInc}>
                +
            </button>
            <button className={styles.button} onClick={props.setDec}>
                -
            </button>
        </div>
    );
};
