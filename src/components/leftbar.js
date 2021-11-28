import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import style from './leftbar.css';
import * as style from "./leftbar.module.css"

const Leftbar = () => {
    return (
        <div className={style.container}>
            <StaticImage className={style.avatar} src="../images/avatar.png" />
            <p className={style.name}>Xie Feng</p>
            <div className={style.buttoncontainer}>
                <div>github</div>
                <div>mail</div>
                <div>wechat</div>
            </div>
            <div className={style.anchorcontainer}>
                <div>intro</div>
                <div>education</div>
                <div>project</div>
            </div>
        </div>
    )
}

export default Leftbar;