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
            <div className={style.anchorcontainer}>
                <div>intro</div>
                <div>education</div>
                <div>project</div>
            </div>
        </div>
    )
}

export default Leftbar;