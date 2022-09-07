import React from "react";
import { Divider } from "antd";
import * as style from './footer.module.css';
import { StaticImage } from "gatsby-plugin-image";
import IsMobile from "../utils/ismobile";

const Footer = () => {
    return (
        <div className={style.container}>
            <Divider />
            <IsMobile>
                <div className={style.map}>
                    <a href="https://clustrmaps.com/site/1bq5e" title="Visit tracker">
                        <img width={'200px'} src="//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=tt&d=V6j_ThBGyW4Y8xE9t3wS156mTdcfePJdgGHNMtjr-fg&co=2d78ad&ct=ffffff" />
                    </a>
                </div>
                <div style={{height: '10px'}}></div>
            </IsMobile>
            <div className={style.blockone}>
                <span>Powered by</span>
                &nbsp;
                <a href="https://www.gatsbyjs.cn/" target="_blank">
                    <StaticImage src='../images/gatsby-tag.png' style={{width: '80px'}} />
                </a>
            </div>
            <div className={style.blocktwo}>
                <span>Copyright&copy;Xiefeng69.github.io</span>
                <span style={{textAlign: 'center', color: '#999', lineHeight: '1', marginTop: '3px', marginBottom: '15px'}}>If you find any problems on this website, such as adaptation, blurred image, copywriting error, please contact me or create an issue in <a href="https://github.com/Xiefeng69/Xiefeng69.github.io/issues">here</a></span>
            </div>
        </div>
    )
}

export default Footer;