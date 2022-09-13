import React from "react";
import IsMobile from "../utils/ismobile";
import ContactButton from "./contactbutton";
import * as style from './introduction.module.css';

const Introduction = () => {
    return (
        <div className={style.introcontainer}>
            <span style={{fontSize: '1.6rem', fontWeight: '600'}}>Hey👋, I am Feng Xie (谢锋) ~ </span>
            <span style={{marginTop: '10px'}}>Currently, I am a Master Candidate in <span style={{fontWeight:'bold'}}>National University of Defense Technology</span> (NUDT, Changsha, Hunan), advised by Bin Zhou. I received my B.Eng. Degree from <span style={{fontWeight:'bold'}}>Dalian University of Technology</span> in 2021.</span>
            <span style={{marginTop: '10px'}}>My study interests include:</span>
            <ul style={{lineHeight:1.6, marginBottom:0}}>
                <li style={{marginBottom:0}}><span style={{fontWeight:'bold'}}>Applied Machine Learning</span> in real world problems, such as time series analysis, epidemic surveillance.</li>
                <li style={{marginBottom:0}}><span style={{fontWeight:'bold'}}>Text Mining and Knowledge Discovery</span> such as stance classification, knowledge graph processing.</li>
            </ul>
            <span style={{marginTop: '10px'}}>More about me, in my daily life, I like Music, Fitness, Travel and Anime.</span>
            <IsMobile>
                <ContactButton />
            </IsMobile>
        </div>
    )
}

export default Introduction;