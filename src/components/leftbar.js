import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactButton from './contactbutton';
import * as style from "./leftbar.module.css"
import IsDesktop from "../utils/isdesktop";

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
                    <a href="https://github.com/Xiefeng69" target="_blank" style={{color:'black'}}>Github: Xiefeng69</a>
                </li>
                <li>
                    <a href="https://www.researchgate.net/profile/Feng-Xie-42/research" target="_blank" style={{color:'black'}}>Research Gate</a>
                </li>
                <li>
                    <a href="/static/xiefeng-resume-english.pdf" target="_blank" style={{color:'black', fontWeight:'bold'}}>[CV (English)]</a>
                </li>
            </ul>
            <IsDesktop>
                <div style={{width:'200px', background:"#666", height:'1px'}}></div>
                <div style={{width:'200px', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <p style={{marginTop: '10px', marginBottom:'10px'}}>Friendship Links</p>
                    <ul style={{width:'80%', lineHeight:0.8}}>
                        <li>
                            <a href="https://yueliu1999.github.io/" target="_blank">Yue Liu</a>
                        </li>
                        <li>
                            <a href="https://xihongyang1999.github.io/" target="_blank">Xihong Yang</a>
                        </li>
                        <li>
                            <a href="https://www.researchgate.net/profile/Zhong-Zhang-39" target="_blank">Zhong Zhang</a>
                        </li>
                    </ul>
                </div>
            </IsDesktop>
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