import React from "react";
import IsMobile from '../utils/ismobile';
import IsDesktop from '../utils/isdesktop';
import './left.css';

const Left = () => {
    return (
        <>
            <IsMobile>
                <div className="top-bar">
                    hello
                </div>
            </IsMobile>
            <IsDesktop>
                <div className="left-bar">
                    hello
                </div>
            </IsDesktop>
        </>
    )
}

export default Left;
