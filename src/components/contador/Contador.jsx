import React, { Component } from "react";
import styles from "./Contador.module.css";
class Contador extends Component {
    state = {
        number: this.props.startingNumber || 0,
        step: this.props.startingStep || 5,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step,
        });
    };
    dec = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    };

    setStep = (e) => {
        this.setState({
            step: +e.target.value,
        });
    };

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="stepInput">Step: </label>
                    <input
                        id="stepnput"
                        className={styles.input}
                        type="number"
                        value={this.state.step}
                        onChange={this.setStep}
                    />
                </div>
                <button className={styles.button} onClick={this.inc}>
                    +
                </button>
                <button className={styles.button} onClick={this.dec}>
                    -
                </button>
                {/* <p>Valor Inicial: {this.state.number}</p> */}
            </div>
        );
    }
}

export default Contador;
