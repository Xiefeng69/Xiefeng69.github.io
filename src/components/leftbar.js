import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactButton from './contactbutton';
import * as style from "./leftbar.module.css"

const Leftbar = () => {
    return (
        <div className={style.container}>
            <StaticImage src="../images/avatar.png" />
            <p className={style.name}>Xie Feng</p>
            <ContactButton />
            <ul style={{marginTop: '16px', fontSize: '1.0rem', lineHeight: 1}}>
                <li>
                    Location: Hunan, China
                </li>
                <li>
                    Github: Xiefeng69
                </li>
                <li>
                <a href="/static/xiefeng-resume-english.pdf" target="_blank" style={{color:'black', fontWeight:'bold'}}>[CV (English)]</a>
                </li>
            </ul>
            {
                /* 
                
                <div className={style.anchorcontainer}>
                    <div>intro</div>
                    <div>education</div>
                    <div>project</div>
                </div>
                
                */
            }
        </div>
    )
}

export default Leftbar;