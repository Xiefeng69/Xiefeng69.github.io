import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { CaretLeftOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";
import { BackTop, Button } from "antd";
import Left from "../partition/left";
import Footer from '../partition/footer';
import IsDesktop from "../utils/isdesktop";
import './publication.css';
import IsMobile from "../utils/ismobile";
import getPublicationInfo from "../utils/getPublication";

const hasExtra = (content) => {
    if(typeof(content)=="undefined" || content == ""){
        return false
    }else{
        return true
    }
}

const Publication = () => {
    const content = "page"
    const types = "all"
    return (
        <div>
            <div className="main-center">
                <div style={{height:'20px'}}></div>
                <div className="tldr_info">
                    <span className="info">i</span>&nbsp;TLDR (short for "Too Long, Didn't Read") is a generated short summary of a paper using&nbsp;<a href="https://chatglm.cn/main/detail" target="_blank">ChatGLM</a>.
                </div>
                {
                    getPublicationInfo(types).length != 0?
                    (getPublicationInfo(types).map((item, index) => {
                        return (
                            <div className="pub_container" key={index} attr={item} style={{marginBottom:'14px'}}>
                                <div className="title">{item.title}</div>
                                <p style={{color:'black', fontSize:'.9rem'}} dangerouslySetInnerHTML={{__html: item.author}}></p>
                                <p style={{color:'#494e52', fontStyle:'italic', fontSize:'.9rem'}}>{item.venues} {hasExtra(item.abbr)?(<span style={{fontWeight:'bold'}}>({item.abbr})</span>):null}</p>
                                <div style={{marginTop: ".2rem"}}></div>
                                <div><span className="tldr">TLDR</span>&nbsp;{item.tldr}</div>
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
                                    <span className="linkbutton"><a href={item.page} target="_blank">Page</a></span>
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