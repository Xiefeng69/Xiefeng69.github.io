import React from "react";
import { Divider } from "antd";
import * as style from './footer.module.css';

const Footer = () => {
    return (
        <div className={style.container}>
            <Divider />
            <div className={style.textontainer}>
                <p className={style.textinfo}>This is made by Xiefeng</p>
            </div>
        </div>
    )
}

export default Footer;