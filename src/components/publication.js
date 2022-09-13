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
            <Subtitle title="Publications"></Subtitle>
            <IsMobile>
                <div style={{display:'flex'}}>
                    <div className={types=="TSA"?style.isActiveM:style.tagM} onClick={()=>setTypeManually('TSA', types, setTypes)}>Time Series Analysis</div>
                    <div className={types=="NLP"?style.isActiveM:style.tagM} onClick={()=>setTypeManually('NLP', types, setTypes)}>NLP</div>
                    <div className={types=="KG"?style.isActiveM:style.tagM} onClick={()=>setTypeManually('KG', types, setTypes)}>Knowledge Graph</div>
                </div>
            </IsMobile>
            <IsDesktop>
                <div style={{display:'flex'}}>
                    <div className={types=="TSA"?style.isActive:style.tag} onClick={()=>setTypeManually('TSA', types, setTypes)}>Time Series Analysis</div>
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
                                <span style={{fontStyle:'italic'}}>{item.venues}, </span>
                                <span style={{fontWeight:'bold'}}>{item.abbr} </span>({item.ccf})&nbsp; 
                                {hasExtra(item.pdf)?(
                                    <a href={item.pdf} target="_blank">[PDF]</a>
                                ):null}
                                {hasExtra(item.code)?(
                                     <a href={item.code} target="_blank">[Code]</a>
                                ):null}
                                {hasExtra(item.page)?(
                                     <a href={item.page}>[Page]</a>
                                ):null}
                            </li>
                        )
                    })):
                    (<div>Coming Soooooooon!</div>)
                }
            </ul>
            {/* <ul className={style.contrainer} style={{lineHeight:1.4, marginTop:'10px'}}>
                <li>
                    <span style={{fontWeight:'bold'}}>Feng Xie</span>, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan.
                    &nbsp;"EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting".
                    &nbsp;<span style={{fontStyle:'italic'}}>The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases</span>, 
                    &nbsp;<span style={{fontWeight:'bold'}}>ECML-PKDD </span>(CCF-B)
                    &nbsp;<a href="https://www.researchgate.net/publication/361523245_EpiGNN_Exploring_Spatial_Transmission_with_Graph_Neural_Network_for_Regional_Epidemic_Forecasting" target="_blank">[PDF]</a>
                    &nbsp;<a href="https://github.com/Xiefeng69/EpiGNN" target="_blank">[Code]</a>
                </li>
                <li>
                <span style={{fontWeight:'bold'}}>Feng Xie</span>, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan.
                    &nbsp;"Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting".
                    &nbsp;<span style={{fontStyle:'italic'}}>The 34th International Conference on Software Engineering & Knowledge Engineering</span>,
                    &nbsp;<span style={{fontWeight:'bold'}}>SEKE2022</span> (CCF-C)
                    &nbsp;<a href="https://www.researchgate.net/publication/361098103_Inter-_and_Intra-Series_Embeddings_Fusion_Network_for_Epidemiological_Forecasting" target="_blank">[PDF]</a>
                    &nbsp;<a href="https://github.com/Xiefeng69/SEFNet" target="_blank">[Code]</a>
                </li>
            </ul> */}
        </div>
    )
}

export default Publication;