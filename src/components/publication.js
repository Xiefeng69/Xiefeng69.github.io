import React from "react";
import IsMobile from "../utils/ismobile";
import IsDesktop from "../utils/isdesktop";
import Subtitle from "./subtitle";
import * as style from './publication.module.css'
import getPublicationInfo from "../utils/getPublication";
import { useState } from "react";
import { Collapse, Tag } from 'antd'

const {Panel} = Collapse
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
    if(typeof(content)=="undefined" || content == ""){
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
            <div className={style.contrainer} style={{marginLeft: "10px", lineHeight:1.3, marginTop:'8px'}}>
                {
                    getPublicationInfo(types).length != 0?
                    (getPublicationInfo(types).map((item, index) => {
                        return (
                            <div key={index} attr={item} style={{marginTop:'14px'}}>
                                <p style={{fontWeight:"bold"}}>{item.title}</p>
                                <p style={{color:'black', fontSize:'.9rem'}} dangerouslySetInnerHTML={{__html: item.author}}></p>
                                <p style={{color:'#494e52', fontStyle:'italic', fontSize:'.9rem'}}>{item.venues} {hasExtra(item.abbr)?(<span style={{fontWeight:'bold'}}>({item.abbr})</span>):null}</p>
                                <div style={{marginTop: ".2rem"}}></div>
                                {hasExtra(item.pdf)?(
                                    <span className={style.linkbutton}><a href={item.pdf} target="_blank">PDF</a></span>
                                ):null}
                                {hasExtra(item.code)?(
                                    <span className={style.linkbutton}><a href={item.code} target="_blank">Code</a></span>
                                ):null}
                                {hasExtra(item.poster)?(
                                    <span className={style.linkbutton}><a href={item.poster} target="_blank">Poster</a></span>
                                ):null}
                                {hasExtra(item.slide)?(
                                    <span className={style.linkbutton}><a href={item.slide} target="_blank">Slide</a></span>
                                    ):null}
                                {hasExtra(item.page)?(
                                    <span className={style.linkbutton}><a href={item.page} target="_blank">Page</a></span>
                                ):null}
                            </div>
                        )
                    })):
                    (<div>Coming Soooooooon!</div>)
                }
            </div>
            {/* <ul className={style.contrainer} style={{lineHeight:1.4, marginTop:'10px'}}>
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
                                {hasExtra(item.poster)?(
                                    <a href={item.poster} target="_blank">[Poster]</a>
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
                            </li>
                        )
                    })):
                    (<div>Coming Soooooooon!</div>)
                }
            </ul> */}
            <div style={{width:"1px", height:"10px"}}></div>
            <Collapse className={style.collapseContainer} ghost defaultActiveKey={['1']}>
                <Panel header="Other Publications">
                    <ul style={{fontSize:'.9rem'}}>
                        <li>
                            <span>Haiyang Wang, Ye Wang, Xin Song, Bin Zhou, Xuechen Zhao, <span style={{fontWeight:'bold'}}>Feng Xie</span>.</span>
                            &nbsp;<span>"Quantifying controversy from stance, sentiment, offensiveness and sarcasm: a fine-grained controversy intensity measurement framework on a Chinese dataset". </span>
                            <span style={{fontWeight:'bold'}}>World Wide Web Journal </span>
                            <a href="https://link.springer.com/article/10.1007/s11280-023-01191-x" target="_blank">[PDF]</a>
                        </li>
                        <li>
                            <span>Yuying Liao, Le Ma, Bin Zhou, Xuechen Zhao, <span style={{fontWeight:'bold'}}>Feng Xie</span>.</span>
                            &nbsp;<span>"DraftFed: a Draft-based Personalized Federated Learning Approach for Heterogeneous Convolutional Neural Networks". </span>
                            <span style={{fontWeight:'bold'}}>IEEE Transactions on Mobile Computing </span>
                            <a href="https://doi.org/10.1109/TMC.2023.3283557" target="_blank">[PDF]</a>
                        </li>
                        <li>
                            <span>Hayat Dino Bedru, Chen Zhang, <span style={{fontWeight:'bold'}}>Feng Xie</span>, Shuo Yu, Iftikhar Hussain.</span>
                            &nbsp;<span>"CLARA: Citation and Similarity-based Author Ranking". </span>
                            <span style={{fontWeight:'bold'}}>Scientometrics </span>
                            <a href="https://doi.org/10.1007/s11192-022-04590-5" target="_blank">[PDF]</a>
                            <span> (This work was done when I was in DLUT)</span>
                        </li>
                    </ul>
                </Panel>
            </Collapse>
            {/* <p style={{fontWeight:'bold', fontSize:'1rem', marginLeft: '10px', marginTop: '12px'}}>Other Publications</p> */}
        </div>
    )
}

export default Publication;