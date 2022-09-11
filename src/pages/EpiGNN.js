import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { CaretLeftOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";
import { BackTop, Button } from "antd";
import Left from "../partition/left";
import Footer from '../partition/footer';
import IsDesktop from "../utils/isdesktop";
import './blogTemplate.css';
import IsMobile from "../utils/ismobile";

const EpiGNN = () => {
    const content = "page"
    return (
        <div>
            <div className="main">
                <Left content={content} />
                <IsDesktop>
                    <div style={{width:'24px'}}></div>
                </IsDesktop>
                <div className="rightcontainer">
                    <div style={{fontSize: '1.6rem', fontWeight: '600', lineHeight: '1.3'}}>EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting</div>
                    <div style={{fontSize: '1rem'}}>Feng Xie, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan</div>
                    <div style={{fontSize: '1rem'}}>Published in <span style={{fontStyle:'italic'}}>The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD2022)</span></div>
                    <div style={{marginTop: '8px'}}>
                    <Button type="primary" size="small" onClick={()=>{window.open("/","_self")}}><CaretLeftOutlined /><span style={{marginLeft:'2px'}}>Back</span></Button>
                      <Button type="primary" size="small" style={{marginLeft: '8px'}} onClick={()=>{window.open("https://www.researchgate.net/publication/361523245_EpiGNN_Exploring_Spatial_Transmission_with_Graph_Neural_Network_for_Regional_Epidemic_Forecasting")}}>PDF</Button>
                      <Button type="primary" size="small" style={{marginLeft: '8px'}} onClick={()=>{window.open("https://github.com/Xiefeng69/EpiGNN")}}>Code</Button>
                    </div>
                    <div style={{width:'100%', background:'#999999', height:'1px', marginTop:'10px'}}></div>
                    <div style={{fontSize: '1rem'}}>
                      <div>
                        <div style={{fontSize:'1.2rem', fontWeight:'bold', marginTop: '6px'}}>Abstract</div>
                        Epidemic forecasting is the key to effective control of epidemic transmission and helps the world mitigate the crisis that threatens public health. To better understand the transmission and evolution of epidemics, we propose EpiGNN, a graph neural network-based model for epidemic forecasting. Specifically, we design a transmission risk encoding module to characterize local and global spatial effects of regions in epidemic processes and incorporate them into the model. Meanwhile, we develop a Region-Aware Graph Learner (RAGL) that takes transmission risk, geographical dependencies, and temporal information into account to better explore spatial-temporal dependencies and makes regions aware of related regions' epidemic situations. The RAGL can also combine with external resources, such as human mobility, to further improve prediction performance. Comprehensive experiments on five real-world epidemic-related datasets (including influenza and COVID-19) demonstrate the effectiveness of our proposed method and show that EpiGNN outperforms state-of-the-art baselines by 9.48% in RMSE.
                      </div>
                      <div>
                        <div style={{fontSize:'1.2rem', fontWeight:'bold', marginTop: '6px'}}>Main Contributions</div>
                        <ol>
                          <li>We design a novel graph neural network-based model for epidemic prediction in which a transmission risk encoding module is proposed that shows how we incorporate local and global spatial effects of regions into the model.</li>
                          <li>We introduce a Region-Aware Graph Learner which takes transmission risk, geographical information, and temporal dependencies into account to better explore underlying spatio-temporal correlations between regions.</li>
                          <li>We evaluate our model on five epidemic-related datasets. Experimental results show the proposed method achieves state-of-the-art performance and demonstrate the effectiveness of our model.</li>
                        </ol>
                        <IsDesktop>
                          <div style={{width:'65%', marginLeft:'auto', marginRight:'auto'}}>
                            <StaticImage src="../images/EpiGNN.png" alt="epignn" />
                          </div>
                        </IsDesktop>
                        <IsMobile>
                          <div style={{width:'100%', marginLeft:'auto', marginRight:'auto'}}>
                            <StaticImage src="../images/EpiGNN.png" alt="epignn" />
                          </div>
                        </IsMobile>
                      </div>
                      <div>
                        <div style={{fontSize:'1.2rem', fontWeight:'bold', marginTop: '6px'}}>Experiments</div>
                        We conduct experiments on five epidemic-related datasets, three are seasonal influenza datasets and two are COVID-19 datasets. More about the experimental results, please refer to the paper.
                      </div>
                    </div>
                </div>
            </div>
            <BackTop visibilityHeight={150} />
            <Footer />
        </div>
    )
}

export default EpiGNN
