import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import * as style from './projectmobile.module.css';

const ProjectMobile = (props) => {
    const hasImage = (extra) => {
        let keys = Object.keys(extra)
        if (keys.includes('image')) {
            console.log(extra.image)
            return true
        } else {
            return false
        }
    }
    return (
        <div className={style.container}>
            <div className={style.projecttext}>
                <span className={style.projectname}>{ props.name }</span>
                <br />
                <span className={style.projecttime}>{ props.time }</span>
            </div>
            <div>
                {
                    hasImage(props.extra) ? 
                    <div className="logo">
                        <img src={props.extra.image} />
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectMobile;