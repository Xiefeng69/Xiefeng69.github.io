import React from "react";
import './ismobile.css';

const IsMobile =  (props) => {
    return (
        <div className="is-mobile">
            {props.children}
        </div>
    )
}

export default IsMobile;