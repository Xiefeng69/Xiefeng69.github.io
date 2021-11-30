import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ContactButton from './contactbutton';
import * as style from './topbar.module.css';

const Topbar = () => {
    return (
        <div className={style.container}>
            <div className={style.avatarcontainer}>
                <StaticImage className={style.avatar} src="../images/avatar.png" />
            </div>
            <div className={style.introcontainer}>
                <p>Hey guys, I am Xiefeng69 ~ </p>
                <p>Now I am a master in NUDT majored in CS.</p>
                <p>My interest is ML, Web development and cluster.</p>
                <ContactButton />
            </div>
        </div>
    )
}

export default Topbar;