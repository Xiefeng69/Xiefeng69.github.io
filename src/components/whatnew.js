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
                    <span style={{fontWeight:'bold'}}>[Jan 15, 2023]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="http://www.tjudb.cn/dasfaa2023/" target="_blank">DASFAA 2023</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Dec 26, 2022]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="https://www.siam.org/conferences/cm/conference/sdm23" target="_blank">SDM 2023</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Nov 10, 2022]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="https://www.springer.com/journal/11192" target="_blank">Scientometrics</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Sep 07, 2022]</span> 🎉 I received the Outstanding Student Award of NUDT.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Aug 29, 2022]</span> 👏 We released the competition - Social Network Alignment under Noise Intervention (带噪音的社交网络对齐) at CCF BDCI 2022, welcome to the competition! <a href="https://www.datafountain.cn/competitions/598" target="_blank">[Page]</a> <a href="https://github.com/Xiefeng69/BDCI2022-Network-Alignment-Competition" target="_blank">[GitHub]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Jun 15, 2022]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="https://2022.ecmlpkdd.org/" target="_blank">ECML-PKDD 2022</a>. <a href="/EpiGNN">[Page]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Apr 21, 2022]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="http://ksiresearch.org/seke/seke22.html" target="_blank">SEKE 2022</a>. <a href="/SEFNet">[Page]</a>
                </li>
            </ul>
        </div>
    )
}

export default Whatnew;