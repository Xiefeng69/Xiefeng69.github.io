import React from "react";
import IsMobile from '../utils/ismobile';
import IsDesktop from '../utils/isdesktop';
import Leftbar from "../components/leftbar";
import Topbar from "../components/topbar";
import * as style from './left.module.css';

const Left = () => {
    return (
        <>
            <IsMobile>
                <div className={style.topbar}>
                    <Topbar />
                </div>
            </IsMobile>
            <IsDesktop>
                <div className={style.leftbar}>
                    <Leftbar />
                </div>
            </IsDesktop>
        </>
    )
}

export default Left;
