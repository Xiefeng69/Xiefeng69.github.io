import React from "react";
import IsMobile from "../utils/ismobile";
import IsDesktop from "../utils/isdesktop";
import Subtitle from "./subtitle";
import * as style from './publication.module.css'

const Whatnew = () => {
    return (
        <div>
            <Subtitle title="What's New" color="red"></Subtitle>
            <ul className={style.contrainer} style={{lineHeight:1.3}}>
                <li>
                    <span style={{fontWeight:'bold'}}>[Sep 07, 2022]</span> 🎉 I received the Outstanding Student Award of National University of Defense Technology.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Aug 29, 2022]</span> 👏 We released the competition - Social Network Alignment under Noise Intervention (带噪音的社交网络对齐) at CCF BDCI 2022, welcome to the competition! <a href="https://www.datafountain.cn/competitions/598" target="_blank">[Page]</a> <a href="https://github.com/Xiefeng69/BDCI2022-Network-Alignment-Competition" target="_blank">[GitHub]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Jun 15, 2022]</span> 🎉 One paper got accepted for <a style={{color:'#000', textDecoration:'underline'}} href="https://2022.ecmlpkdd.org/" target="_blank">ECML-PKDD 2022</a> (CCF-B). <a href="/EpiGNN">[Page]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Apr 21, 2022]</span> 🎉 One paper got accepted for <a style={{color:'#000', textDecoration:'underline'}} href="http://ksiresearch.org/seke/seke22.html" target="_blank">SEKE 2022</a> (CCF-C). <a href="/SEFNet">[Page]</a>
                </li>
            </ul>
        </div>
    )
}

export default Whatnew;