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
                    <span style={{fontWeight:'bold'}}>[Aug 29, 2022]</span> 👏 We released the competition - Social Network Alignment with Noise at CCF BDCI 2022, welcome to the competition! <a href="https://www.datafountain.cn/competitions/598" target="_blank">[Page]</a> <a href="https://github.com/Xiefeng69/BDCI2022-Network-Alignment-Competition" target="_blank">[GitHub]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Jun 15, 2022]</span> 🎉 One paper got accepted for ECML-PKDD 2022 (CCF-B).
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Apr 21, 2022]</span> 🎉 One paper got accepted for SEKE 2022 (CCF-C).
                </li>
            </ul>
        </div>
    )
}

export default Whatnew;