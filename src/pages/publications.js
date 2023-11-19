import * as React from "react"
import "antd/dist/antd.css";
import { BackTop, Button } from "antd";
import Footer from '../partition/footer';
import './publications.css';
import { useState } from "react";
import getPublicationInfo from "../utils/getPublication";
import { AiFillInfoCircle } from "react-icons/ai";
import IsMobile from "../utils/ismobile";

const hasExtra = (content) => {
    if(typeof(content)=="undefined" || content == ""){
        return false
    }else{
        return true
    }
}

const modifyStatus = (index, statusList, setStatusList) => {
    console.log(statusList[index])
    const tmp = [...statusList] // vue和react默认都是浅监听
    if (tmp[index] == true){
        tmp[index] = false
    } else {
        tmp[index] = true
    }
    setStatusList(tmp)
    console.log(statusList[index])
}

const Publication = () => {
    const types = "all"
    const status = []
    for(var i=0; i<getPublicationInfo(types).length; i++){
        status.push(false)
    }
    const [statusList, setStatusList] = useState(status)
    return (
        <div>
            <div className="main-center">
                <IsMobile>
                    <div className="navigator">
                        <a href="/" style={{color: "black"}}>homepage</a> \ publications
                    </div>
                </IsMobile>
                <p style={{fontWeight: "bold", fontSize: "1.6rem", marginBottom: "10px"}}>Publications</p>
                <div className="tldr_info">
                    <AiFillInfoCircle />
                    <div style={{width: "5px"}}></div>
                    <span>* indicates equal contribution</span>
                </div>
                {/* <div className="tldr_info">
                    <span className="info">i</span>&nbsp;TLDR (short for "Too Long, Didn't Read") is a generated short summary of a paper using&nbsp;<a href="https://chatglm.cn/main/detail" target="_blank">ChatGLM</a>.
                </div> */}
                {
                    getPublicationInfo(types).length != 0?
                    (getPublicationInfo(types).map((item, index) => {
                        return (
                            <div className="pub_container" key={index} attr={item} style={{marginBottom:'14px'}}>
                                <div className="title">{item.title}</div>
                                <p style={{color:'black', fontSize:'.9rem'}} dangerouslySetInnerHTML={{__html: item.author}}></p>
                                <p style={{color:'#494e52', fontStyle:'italic', fontSize:'.9rem'}}>{item.venues} {hasExtra(item.abbr)?(<span style={{fontWeight:'bold'}}>({item.abbr})</span>):null}</p>
                                <div style={{marginTop: ".2rem"}}></div>
                                {/* <div><span className="tldr">TLDR</span>&nbsp;{item.tldr}</div> */}
                                {hasExtra(item.pdf)?(
                                    <span className="linkbutton"><a href={item.pdf} target="_blank">PDF</a></span>
                                ):null}
                                {hasExtra(item.code)?(
                                    <span className="linkbutton"><a href={item.code} target="_blank">Code</a></span>
                                ):null}
                                {hasExtra(item.poster)?(
                                    <span className="linkbutton"><a href={item.poster} target="_blank">Poster</a></span>
                                ):null}
                                {hasExtra(item.slide)?(
                                    <span className="linkbutton"><a href={item.slide} target="_blank">Slide</a></span>
                                    ):null}
                                {hasExtra(item.page)?(
                                    <span className="linkbutton"><a href={item.page}>Page</a></span>
                                ):null}
                                {hasExtra(item.tldr)?(
                                    <span className="linkbutton"><a onClick={()=>{modifyStatus(index, statusList, setStatusList)}}>Abstract</a></span>
                                ):null}
                                {statusList[index]?(
                                    <div className="tldr_card">
                                        {item.tldr}
                                    </div>
                                ):null}
                            </div>
                        )
                    })):
                    (<div>Coming Soooooooon!</div>)
                }
            </div>
            <BackTop visibilityHeight={150} />
            <Footer />
        </div>
    )
}

export default Publication