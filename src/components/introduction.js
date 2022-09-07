import React from "react";
import IsMobile from "../utils/ismobile";
import ContactButton from "./contactbutton";
import * as style from './introduction.module.css';

const Introduction = () => {
    return (
        <div className={style.introcontainer}>
            <span style={{fontSize: '1.6rem', fontWeight: '600'}}>Hey👋, I am Xie Feng (谢锋) ~ </span>
            <span style={{marginTop: '10px'}}>Currently, I am a Master Candidate in National University of Defense Technology (NUDT, Changsha, Hunan), advised by Bin Zhou. I received my B.Eng. Degree from Dalian University of Technology in 2021.</span>
            <span style={{marginTop: '10px'}}>My study interests include <span style={{borderBottom: '1px solid #333'}}>Web Development</span> and <span style={{borderBottom: '1px solid #333'}}>Data Mining</span> (time series analysis, natural language processing). More about me, in my daily life, I like Music, Fitness, Travel and Anime.</span>
            <IsMobile>
                <ContactButton />
            </IsMobile>
        </div>
    )
}

export default Introduction;