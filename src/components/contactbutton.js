import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as style from './contactbutton.module.css';
import githublogo from '../images/github.png';
import wechatlogo from '../images/wechat.png';
import emaillogo from '../images/email.png';

const ContactButton = (props) => {
    return (
        <div className={style.buttoncontainer}>
            <div>
                <a href="https://github.com/Xiefeng69" target="_blank">
                    <img src={githublogo} />
                </a>
            </div>
            <div>
                <img src={wechatlogo} />
            </div>
            <div>
                <img src={emaillogo} />
            </div>
        </div>
    )
}

export default ContactButton;