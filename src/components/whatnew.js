import React from "react";
import IsMobile from "../utils/ismobile";
import IsDesktop from "../utils/isdesktop";
import Subtitle from "./subtitle";
import * as style from './publication.module.css'

const Whatnew = () => {
    return (
        <div>
            <Subtitle title="What's New" color="red"></Subtitle>
            <ul className={style.contrainer} style={{lineHeight:1}}>
                <li>
                    <span style={{fontWeight:'bold'}}>[June 15, 2022]</span> One paper got accepted for ECML-PKDD 2022 (CCF-B).
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[April 21, 2022]</span> One paper got accepted for SEKE 2022 (CCF-C).
                </li>
            </ul>
        </div>
    )
}

export default Whatnew;