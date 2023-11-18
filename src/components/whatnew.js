import React from "react";
import { Collapse, Tag } from 'antd'
import Subtitle from "./subtitle";
import * as style from './publication.module.css'

const {Panel} = Collapse
const Whatnew = () => {
    return (
        <div>
            <Subtitle title="What's New" color="red"></Subtitle>
            <ul className={style.contrainer} style={{lineHeight:1.3}}>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.11.10]</span> I won the National Scholarship (for master students).
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.10.08]</span> One paper got accepted for <a style={{color:'#000'}} href="https://2023.emnlp.org/" target="_blank">EMNLP 2023</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.06.21]</span> One paper got accepted for <a style={{color:'#000'}} href="https://www.springer.com/journal/11280" target="_blank">World Wide Web Journal</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.06.13]</span> I joined <a style={{color:'#000'}} href="https://www.vip.com/" target="_blank">VIPSHOP</a> as an NLP intern and look forward to a nice summer!
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.05.31]</span> One paper got accepted for <a style={{color:'#000'}} href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7755" target="_blank">IEEE Transactions on Mobile Computing</a>. <a href="https://doi.org/10.1109/TMC.2023.3283557" target="_blank">[PDF]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.05.24]</span> I received the <a style={{color:'#000'}} href="https://pakdd2023.org/awards/" target="_blank">Student Registration Award of PAKDD 2023</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.02.22]</span> One paper got accepted for <a style={{color:'#000'}} href="http://pakdd2023.org/" target="_blank">PAKDD 2023</a>. <a href="https://link.springer.com/chapter/10.1007/978-3-031-33377-4_1" target="_blank">[PDF]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2023.01.15]</span> One paper got accepted for <a style={{color:'#000'}} href="http://www.tjudb.cn/dasfaa2023/" target="_blank">DASFAA 2023</a>. <a href="https://link.springer.com/chapter/10.1007/978-3-031-30678-5_18" target="_blank">[PDF]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2022.12.26]</span> One paper got accepted for <a style={{color:'#000'}} href="https://www.siam.org/conferences/cm/conference/sdm23" target="_blank">SDM 2023</a>. <a href="https://doi.org/10.1137/1.9781611977653.ch101" target="_blank">[PDF]</a>
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[2022.11.10]</span> One paper got accepted for <a style={{color:'#000'}} href="https://www.springer.com/journal/11192" target="_blank">Scientometrics</a>. <a href="https://link.springer.com/article/10.1007/s11192-022-04590-5" target="_blank">[PDF]</a>
                </li>
            </ul>
            <Collapse className={style.collapseContainer} ghost defaultActiveKey={['1']}>
                <Panel header="See older ...">
                    <ul className={style.contrainer} style={{lineHeight:1.3}}>
                        <li>
                            <span style={{fontWeight:'bold'}}>[2022.09.07]</span> I received the Outstanding Student Award of NUDT.
                        </li>
                        <li>
                            <span style={{fontWeight:'bold'}}>[2022.08.29]</span> We released the competition - Social Network Alignment under Noise Intervention (带噪音的社交网络对齐) at CCF BDCI 2022, welcome to the competition! <a href="https://www.datafountain.cn/competitions/598" target="_blank">[Page]</a> <a href="https://github.com/Xiefeng69/BDCI2022-Network-Alignment-Competition" target="_blank">[GitHub]</a>
                        </li>
                        <li>
                            <span style={{fontWeight:'bold'}}>[2022.06.15]</span> One paper got accepted for <a style={{color:'#000'}} href="https://2022.ecmlpkdd.org/" target="_blank">ECML-PKDD 2022</a>. <a href="https://link.springer.com/chapter/10.1007/978-3-031-26422-1_29" target="_blank">[PDF]</a>
                        </li>
                        <li>
                            <span style={{fontWeight:'bold'}}>[2022.04.21]</span> One paper got accepted for <a style={{color:'#000'}} href="http://ksiresearch.org/seke/seke22.html" target="_blank">SEKE 2022</a>.
                        </li>
                    </ul>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Whatnew;