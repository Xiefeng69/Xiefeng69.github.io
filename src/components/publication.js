import React from "react";
import IsMobile from "../utils/ismobile";
import IsDesktop from "../utils/isdesktop";
import Subtitle from "./subtitle";
import * as style from './publication.module.css'
import getPublicationInfo from "../utils/getPublication";
import { useState } from "react";

const filterattr = (type, attr) => {
    if (type == "all"){
        return true
    }
    if (type == "NLP"){
        if (attr == "NLP"){
            return true
        }else {
            return false
        }
    }
    if (type == "TSA"){
        if (attr == "TSA"){
            return true
        }else {
            return false
        }
    }
    if (type == "KG"){
        if (attr == "KG"){
            return true
        }else {
            return false
        }
    }
}

const hasExtra = (content) => {
    if(content == ""){
        return false
    }else{
        return true
    }
}

const setTypeManually = (toset, type, setTypes) => {
    if (toset == type){
        setTypes("all")
    }
    else {
        setTypes(toset)
    }
}

const Publication = () => {
    const [types, setTypes] = useState('all')
    return (
        <div>
            <Subtitle title="Publications" subinfo="[* indicates equal contribution]"></Subtitle>
            <IsMobile>
                <div style={{display:'flex'}}>
                    <div className={types=="TSA"?style.isActiveM:style.tagM} onClick={()=>setTypeManually('TSA', types, setTypes)}>Data Science</div>
                    <div className={types=="NLP"?style.isActiveM:style.tagM} onClick={()=>setTypeManually('NLP', types, setTypes)}>NLP</div>
                    <div className={types=="KG"?style.isActiveM:style.tagM} onClick={()=>setTypeManually('KG', types, setTypes)}>Knowledge Graph</div>
                </div>
            </IsMobile>
            <IsDesktop>
                <div style={{display:'flex'}}>
                    <div className={types=="TSA"?style.isActive:style.tag} onClick={()=>setTypeManually('TSA', types, setTypes)}>Data Science</div>
                    <div className={types=="NLP"?style.isActive:style.tag} onClick={()=>setTypeManually('NLP', types, setTypes)}>Natural Language Processing</div>
                    <div className={types=="KG"?style.isActive:style.tag} onClick={()=>setTypeManually('KG', types, setTypes)}>Knowledge Graph</div>
                </div>
            </IsDesktop>
            <ul className={style.contrainer} style={{lineHeight:1.4, marginTop:'10px'}}>
                {
                    getPublicationInfo(types).length != 0?
                    (getPublicationInfo(types).map((item, index) => {
                        return (
                            <li key={index} attr={item}>
                                <span dangerouslySetInnerHTML={{__html: item.author}}></span>
                                &nbsp;<span>"{item.title}". </span>
                                {hasExtra(item.venues)?(
                                    <span style={{fontStyle:'italic'}}>{item.venues}, </span>
                                ):null}
                                {hasExtra(item.abbr)?(
                                    <span style={{fontWeight:'bold'}}>{item.abbr} </span>
                                ):null}
                                {hasExtra(item.ccf)?(
                                    <span> ({item.ccf}) </span>
                                ):null}
                                {hasExtra(item.comment)?(
                                    <span>({item.comment}) </span>
                                ):null}
                                {hasExtra(item.pdf)?(
                                    <a href={item.pdf} target="_blank">[PDF]</a>
                                ):null}
                                {hasExtra(item.code)?(
                                     <a href={item.code} target="_blank">[Code]</a>
                                ):null}
                                {hasExtra(item.page)?(
                                     <a href={item.page}>[Page]</a>
                                ):null}
                                {hasExtra(item.slide)?(
                                    <a href={item.slide} target="_blank">[Slide]</a>
                                ):null}
                                {/* style={{fontWeight:'bold'}} */}
                            </li>
                        )
                    })):
                    (<div>Coming Soooooooon!</div>)
                }
            </ul>
            <p style={{fontWeight:'bold', fontSize:'1rem', marginLeft: '10px'}}>Other Publications</p>
            <ul style={{fontSize:'1rem'}}>
                <li>
                    <span>Hayat Dino Bedru, Chen Zhang, <span style={{fontWeight:'bold'}}>Feng Xie</span>, Shuo Yu, Iftikhar Hussain.</span>
                    &nbsp;<span>"CLARA: Citation and Similarity-based Author Ranking". </span>
                    <span style={{fontWeight:'bold'}}>Scientometrics </span>
                    <a href="https://doi.org/10.1007/s11192-022-04590-5" target="_blank">[PDF]</a>
                    <span> (This work was done when I was in DLUT)</span>
                </li>
            </ul>
        </div>
    )
}

export default Publication;