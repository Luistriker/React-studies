import React, { cloneElement } from "react";

function Familia(props) {
    return (
        <div>
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
        </div>
    );
}

export default Familia;
