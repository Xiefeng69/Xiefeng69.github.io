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
                content: `My ${type} has been copied`,
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
            <div onClick={() => {copyInfo('Wechat', 'xf16943')}} className={style.containeritem}>
                <StaticImage src="../images/wechat.png" alt="wechat" />
            </div>
            <IsMobile>
                <div style={{width: '20px'}}></div>
            </IsMobile>
            <div onClick={() => copyInfo('email', 'xiefeng0526@foxmail.com')} className={style.containeritem}>
                <StaticImage src="../images/email.png" alt="email" />
            </div>
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