import React from "react";
import { Divider } from "antd";
import * as style from './footer.module.css';
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
    return (
        <div className={style.container}>
            <Divider />
            <div className={style.blockone}>
                <span>Powered by</span>
                &nbsp;
                <a href="https://www.gatsbyjs.cn/" target="_blank">
                    <StaticImage src='../images/gatsby-tag.png' style={{width: '80px'}} />
                </a>
            </div>
            <div className={style.blocktwo}>
                <span>Copyright&copy;Xiefeng69.github.io</span>
                <span style={{textAlign: 'center', color: '#999', lineHeight: '1', marginTop: '3px', marginBottom: '15px'}}>If you find any problems on this website, such as adaptation, blurred image, copywriting error, please contact me</span>
            </div>
        </div>
    )
}

export default Footer;