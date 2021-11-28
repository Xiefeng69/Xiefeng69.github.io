import React from "react";

const getExtraInfo = (x) => {
    let keys = Object.keys(x[0])
    console.log('taggeeeeee', keys)
    return keys
}

const ProjectDesktop = (props) => {
    return (
        <li>
            { `${props.time}, ${props.name}, ` }
            {
                getExtraInfo(props.extra).map((item, index)=><span key={index}>[<a href={props.extra[0][item]} target="_blank">{item}</a>]</span>)
            }
        </li>
    )
}

export default ProjectDesktop;