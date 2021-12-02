import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import * as style from './projectmobile.module.css';

const ProjectMobile = (props) => {
    return (
        <div className={style.container}>
            <div className={style.projecttext}>
                <span className={style.projectname}>{ props.name }</span>
                <br />
                <span className={style.projecttime}>{ props.time }</span>
            </div>
            <div>
                {
                    props.image ? 
                    <div className="logo">
                        <img src={props.image} />
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectMobile;