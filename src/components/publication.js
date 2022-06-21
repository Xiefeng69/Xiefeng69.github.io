import React from "react";
import IsMobile from "../utils/ismobile";
import IsDesktop from "../utils/isdesktop";
import Subtitle from "./subtitle";
import * as style from './publication.module.css'

const Publication = () => {
    return (
        <div>
            <Subtitle title="Publications"></Subtitle>
            <ul className={style.contrainer} style={{lineHeight:1.4}}>
                <li>
                    <span style={{fontWeight:'bold'}}>Feng Xie</span>, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan.
                    &nbsp;"EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting".
                    &nbsp;<span style={{fontStyle:'italic'}}>The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases</span>, 
                    &nbsp;<span style={{fontWeight:'bold'}}>ECML-PKDD </span>(CCF-B)
                    &nbsp;<a href="https://github.com/Xiefeng69/EpiGNN" target="_blank">[Code]</a>
                </li>
                <li>
                <span style={{fontWeight:'bold'}}>Feng Xie</span>, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan.
                    &nbsp;"Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting".
                    &nbsp;<span style={{fontStyle:'italic'}}>The 34th International Conference on Software Engineering & Knowledge Engineering</span>,
                    &nbsp;<span style={{fontWeight:'bold'}}>SEKE2022</span> (CCF-C)
                    &nbsp;<a href="http://ksiresearch.org/seke/seke22paper/paper109.pdf" target="_blank">[PDF]</a>
                    &nbsp;<a href="https://github.com/Xiefeng69/SEFNet" target="_blank">[Code]</a>
                </li>
            </ul>
        </div>
    )
}

export default Publication;