import React, { Component } from "react";
import { Button } from "./Button";
import { Display } from "./Display";
import { Form } from "./Form";
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

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        });
    };

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display number={this.state.number} />
                <Form step={this.state.step} setStep={this.setStep} />
                <Button setInc={this.inc} setDec={this.dec} />
                {/* <p>Valor Inicial: {this.state.number}</p> */}
            </div>
        );
    }
}

export default Contador;
