import React from "react";
import './isdesktop.css';

const IsDesktop =  (props) => {
    return (
        <div className="is-desktop">
            {props.children}
        </div>
    )
}

export default IsDesktop;