import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Anchor from './anchor';
import Introduction from './introduction';
import * as style from './topbar.module.css';

const Topbar = (props) => {
    return (
        <div>
            <Anchor />
            <div className={style.container}>
                {props.content != "page" ?
                <div className={style.avatarcontainer}>
                    <StaticImage className={style.avatar} src="../images/avatar_long.png" alt="avatar" />
                </div>: null}
                {props.content != "page" ? <Introduction /> : null}
            </div>
        </div>
    )
}

export default Topbar;