import React from "react";
import { message } from "antd";
import { StaticImage } from "gatsby-plugin-image";
import IsMobile from '../utils/ismobile';
import * as style from './contactbutton.module.css';

const ContactButton = () => {
    const copyInfo = (type, info) => {
        //document.execCommand
        navigator.clipboard.writeText(info).then(()=>{
            message.success({
                content: `The ${type} has been copied`,
                duration: 2,
                style: {
                    marginTop: '5vh'
                }
            })
        }).catch(() => {
            message.warning('Please click it again', 2)
        })
    }
    return (
        <div className={style.buttoncontainer}>
            <div className={style.containeritem}>
                <a href="https://github.com/Xiefeng69" target="_blank">
                    <StaticImage src="../images/github.png" alt="github" />
                </a>
            </div>
            <IsMobile>
                <div style={{width: '20px'}}></div> 
            </IsMobile>
            <div className={style.containeritem}>
                <a href="https://orcid.org/0000-0003-3944-236X" target="_blank">
                    <StaticImage src="../images/orcid.png" alt="orcid" />
                </a>
            </div>
            <IsMobile>
                <div style={{width: '20px'}}></div>
            </IsMobile>
            <div className={style.containeritem}>
                <a href="https://scholar.google.com/citations?user=nF5tqy4AAAAJ" target="_blank">
                    <StaticImage src="../images/gscholar.png" alt="gscholar" />
                </a>
            </div>
            <IsMobile>
                <div style={{width: '20px'}}></div>
            </IsMobile>
            <IsMobile>
                <div onClick={() => copyInfo('E-mail', 'xiefeng@nudt.edu.cn')} className={style.containeritem}>
                    <StaticImage src="../images/email.png" alt="email" />
                </div>
            </IsMobile>
            <IsMobile>
                <div style={{width: '20px'}}></div>
            </IsMobile>
            <IsMobile>
                <a href="/static/Resume.pdf" target="_blank" style={{color:'black', fontWeight:'bold'}}>[CV (English)]</a>
            </IsMobile>
        </div>
    )
}

export default ContactButton;