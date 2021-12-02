import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Anchor from './anchor';
import Introduction from './introduction';
import * as style from './topbar.module.css';

const Topbar = () => {
    return (
        <div>
            <Anchor />
            <div className={style.container}>
                <div className={style.avatarcontainer}>
                    <StaticImage className={style.avatar} imgStyle={{borderRadius: '50%'}} src="../images/avatar.png" />
                </div>
                <Introduction />
            </div>
        </div>
    )
}

export default Topbar;