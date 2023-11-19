import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactButton from './contactbutton';
import * as style from "./leftbar.module.css"
import IsDesktop from "../utils/isdesktop";
import { AiFillHome } from "react-icons/ai";

const Leftbar = () => {
    return (
        <div className={style.container}>
            <div className={style.stickycontainer}>
                <StaticImage src="../images/avatar_long.png" alt="avatar" style={{width: "170px", borderRadius: "0%", marginLeft: "auto", marginRight: "auto"}}/>
                <p className={style.name}>Lebby.Xie</p>
                {/* <div>
                    Lebby.xie
                </div> */}
                <ContactButton />
                <ul style={{marginTop: '16px', fontSize: '1.0rem', lineHeight: 1}}>
                    <li>
                        Changsha, China
                    </li>
                    <li>
                        <a href="mailto:xiefeng@nudt.edu.cn" style={{color:'#000'}}>xiefeng@nudt.edu.cn</a>
                    </li>
                    <li>
                        <a href="https://www.researchgate.net/profile/Feng-Xie-42/research" target="_blank" style={{color:'#000'}}>ResearchGate</a>
                    </li>
                    <li>
                        <a href="/publications" target="_blank" style={{color:'#000'}}>Publications</a>
                    </li>
                    <li>
                        <a href="/static/Resume.pdf" target="_blank" style={{color:'black', fontWeight:'bold'}}>[CV (English)]</a>
                    </li>
                </ul>
                {/* <IsDesktop>
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
                </IsDesktop> */}
                <IsDesktop>
                    <a href="https://clustrmaps.com/site/1bq5e" title="Visit tracker"><img src="//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=tt&d=V6j_ThBGyW4Y8xE9t3wS156mTdcfePJdgGHNMtjr-fg&co=2d78ad&ct=ffffff" /></a>
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
        </div>
    )
}

export default Leftbar;