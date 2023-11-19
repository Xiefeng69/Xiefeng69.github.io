import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { CaretLeftOutlined } from '@ant-design/icons'
import { BackTop, Button } from "antd";

import "antd/dist/antd.css";
import './blogTemplate.css';

import Footer from '../partition/footer';
import IsDesktop from "../utils/isdesktop";
import IsMobile from "../utils/ismobile";

const EpiGNN = () => {
    const content = "page"
    return (
        <div>
            <div className="main-center">
                <div className="navigator">
                  <a href="/" style={{color: "black"}}>homepage</a> \ <a href="/publications" style={{color: "black"}}>publications</a> \ SEFNet
                </div>
                <div style={{fontSize: '1.6rem', fontWeight: '600', lineHeight: '1.3'}}>Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting</div>
                <div style={{fontSize: '1rem'}}>Feng Xie, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan</div>
                <div style={{fontSize: '1rem'}}>Published in <span style={{fontStyle:'italic'}}>The 34th International Conference on Software Engineering & Knowledge Engineering (SEKE2022)</span></div>
                <div style={{marginTop: '8px'}}>
                  {/* <Button type="primary" size="small" onClick={()=>{window.open("/","_self")}}><CaretLeftOutlined /><span style={{marginLeft:'2px'}}>Back</span></Button> */}
                  <Button type="primary" size="small" onClick={()=>{window.open("http://dx.doi.org/10.18293/SEKE2022-109")}}>Paper</Button>
                  <Button type="primary" size="small" style={{marginLeft: '8px'}} onClick={()=>{window.open("https://github.com/Xiefeng69/SEFNet")}}>Code</Button>
                </div>
                <div style={{width:'100%', background:'#999999', height:'1px', marginTop:'10px'}}></div>
                <div style={{fontSize: '1rem'}}>
                  <div>
                    <div style={{fontSize:'1.2rem', fontWeight:'bold', marginTop: '6px'}}>Abstract</div>
                    The accurate forecasting of infectious epidemic diseases is the key to effective control of the epidemic situation in a region. Most existing methods ignore potential dynamic dependencies between regions or the importance of temporal dependencies and inter-dependencies between regions for prediction. In this paper, we propose an Inter- and Intra-Series Embeddings Fusion Network (SEFNet) to improve epidemic prediction performance. SEFNet consists of two parallel modules, named Inter-Series Embedding Module and Intra-Series Embedding Module. In Inter-Series Embedding Module, a multi-scale unified convolution component called Region-Aware Convolution is proposed, which cooperates with self-attention to capture dynamic dependencies between time series obtained from multiple regions. The Intra-Series Embedding Module uses Long Short-Term Memory to capture temporal relationships within each time series. Subsequently, we learn the influence degree of two embeddings and fuse them with the parametric-matrix fusion method. To further improve the robustness, SEFNet also integrates a traditional autoregressive component in parallel with nonlinear neural networks. Experiments on four real-world epidemic-related datasets show SEFNet is effective and outperforms state-of-the-art baselines.
                    <IsDesktop>
                        <div style={{width:'65%', marginLeft:'auto', marginRight:'auto'}}>
                            <StaticImage src="../images/sefnet-motivation.png" alt="motivation" />
                        </div>
                    </IsDesktop>
                    <IsMobile>
                        <div style={{width:'100%', marginLeft:'auto', marginRight:'auto'}}>
                            <StaticImage src="../images/sefnet-motivation.png" alt="motivation" />
                        </div>
                    </IsMobile>
                  </div>
                  <div>
                    <div style={{fontSize:'1.2rem', fontWeight:'bold', marginTop: '6px'}}>Main Contributions</div>
                    <ol>
                      <li>We propose a new model that extracts inter-series correlations and intra-series temporal dependencies through two separate neural networks and uses parametric-matrix fusion to emphasize the importance of each information for epidemic prediction.</li>
                      <li>We propose a multi-scale unified convolution component called Region-Aware Convolution that is capable of extracting local, periodic, and global patterns to better obtain feature representation and capture potential dependencies between regions.</li>
                      <li>We conduct extensive experiments on four real-world epidemic-related datasets. The results show that our model achieves better performance than other state-of-the-art methods and demonstrates the effectiveness of each component.</li>
                    </ol>
                    <IsDesktop>
                      <div style={{width:'65%', marginLeft:'auto', marginRight:'auto'}}>
                        <StaticImage src="../images/SEFNet.png" alt="sefnet" />
                      </div>
                    </IsDesktop>
                    <IsMobile>
                      <div style={{width:'100%', marginLeft:'auto', marginRight:'auto'}}>
                        <StaticImage src="../images/SEFNet.png" alt="sefnet" />
                      </div>
                    </IsMobile>
                  </div>
                  <div>
                    <div style={{fontSize:'1.2rem', fontWeight:'bold', marginTop: '6px'}}>Experiments</div>
                    We conduct experiments on four epidemic-related datasets, three are seasonal influenza datasets and one are COVID-19 datasets. More about the experimental results, please refer to the paper.
                  </div>
                </div>
            </div>
            <BackTop visibilityHeight={150} />
            <Footer />
        </div>
    )
}

export default EpiGNN
