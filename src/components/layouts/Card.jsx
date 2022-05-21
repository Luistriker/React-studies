import React from "react";
import "./styles/Card.css";

function Card(props) {
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
    };
    return (
        <div className="card" style={cardStyle}>
            <div className="tittle">{props.tittle}</div>
            <div className="content">{props.children}</div>
        </div>
    );
}

export default Card;
