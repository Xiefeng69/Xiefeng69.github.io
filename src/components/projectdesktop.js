import React from "react";

const getExtraInfo = (extra) => {
    let keys = Object.keys(extra)
    return keys
}

const ProjectDesktop = (props) => {
    return (
        <li style={{fontSize:'1rem'}}>
            { `${props.time}, ${props.name}, ` }
            {
                getExtraInfo(props.extra).map((item, index)=><span key={index}>[<a href={props.extra[item]} target="_blank">{item}</a>]</span>)
            }
        </li>
    )
}

export default ProjectDesktop;