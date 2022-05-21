import React from "react";
import styles from "../styles/Form.module.css";
export const Form = (props) => {
    return (
        <div>
            <label htmlFor="stepInput">Step: </label>
            <input
                id="stepnput"
                className={styles.input}
                type="number"
                value={props.step}
                onChange={(e) => props.setStep(+e.target.value)}
            />
        </div>
    );
};
