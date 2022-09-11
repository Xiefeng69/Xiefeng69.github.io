"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[675],{7587:function(e,t,n){n.r(t);var a=n(7294),i=n(6125),r=n(2296),o=(n(6411),n(6983)),s=n(6558),l=n(1717),c=n(2810),m=n(6820),d=n(6473);t.default=function(){return a.createElement("div",null,a.createElement("div",{className:"main"},a.createElement(l.Z,null),a.createElement(m.Z,null,a.createElement("div",{style:{width:"24px"}})),a.createElement("div",{className:"rightcontainer"},a.createElement("div",{style:{fontSize:"1.6rem",fontWeight:"600",lineHeight:"1.2"}},"Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting"),a.createElement("div",{style:{fontSize:"1rem"}},"Feng Xie, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan"),a.createElement("div",{style:{fontSize:"1rem"}},"Published in ",a.createElement("span",{style:{fontStyle:"italic"}},"The 34th International Conference on Software Engineering & Knowledge Engineering (SEKE2022)")),a.createElement("div",{style:{marginTop:"8px"}},a.createElement(o.Z,{type:"primary",size:"small",onClick:function(){window.open("/","_self")}},a.createElement(r.Z,null),a.createElement("span",{style:{marginLeft:"2px"}},"Back")),a.createElement(o.Z,{type:"primary",size:"small",style:{marginLeft:"8px"},onClick:function(){window.open("https://www.researchgate.net/publication/361098103_Inter-_and_Intra-Series_Embeddings_Fusion_Network_for_Epidemiological_Forecasting")}},"PDF"),a.createElement(o.Z,{type:"primary",size:"small",style:{marginLeft:"8px"},onClick:function(){window.open("https://github.com/Xiefeng69/SEFNet")}},"Code")),a.createElement("div",{style:{width:"100%",background:"#999999",height:"1px",marginTop:"10px"}}),a.createElement("div",{style:{fontSize:"1rem"}},a.createElement("div",null,a.createElement("div",{style:{fontSize:"1.2rem",fontWeight:"bold",marginTop:"6px"}},"Abstract"),"The accurate forecasting of infectious epidemic diseases is the key to effective control of the epidemic situation in a region. Most existing methods ignore potential dynamic dependencies between regions or the importance of temporal dependencies and inter-dependencies between regions for prediction. In this paper, we propose an Inter- and Intra-Series Embeddings Fusion Network (SEFNet) to improve epidemic prediction performance. SEFNet consists of two parallel modules, named Inter-Series Embedding Module and Intra-Series Embedding Module. In Inter-Series Embedding Module, a multi-scale unified convolution component called Region-Aware Convolution is proposed, which cooperates with self-attention to capture dynamic dependencies between time series obtained from multiple regions. The Intra-Series Embedding Module uses Long Short-Term Memory to capture temporal relationships within each time series. Subsequently, we learn the influence degree of two embeddings and fuse them with the parametric-matrix fusion method. To further improve the robustness, SEFNet also integrates a traditional autoregressive component in parallel with nonlinear neural networks. Experiments on four real-world epidemic-related datasets show SEFNet is effective and outperforms state-of-the-art baselines.",a.createElement(m.Z,null,a.createElement("div",{style:{width:"65%",marginLeft:"auto",marginRight:"auto"}},a.createElement(i.S,{src:"../images/sefnet-motivation.png",alt:"motivation",__imageData:n(631)}))),a.createElement(d.Z,null,a.createElement("div",{style:{width:"100%",marginLeft:"auto",marginRight:"auto"}},a.createElement(i.S,{src:"../images/sefnet-motivation.png",alt:"motivation",__imageData:n(631)})))),a.createElement("div",null,a.createElement("div",{style:{fontSize:"1.2rem",fontWeight:"bold",marginTop:"6px"}},"Main Contributions"),a.createElement("ol",null,a.createElement("li",null,"We propose a new model that extracts inter-series correlations and intra-series temporal dependencies through two separate neural networks and uses parametric-matrix fusion to emphasize the importance of each information for epidemic prediction."),a.createElement("li",null,"We propose a multi-scale unified convolution component called Region-Aware Convolution that is capable of extracting local, periodic, and global patterns to better obtain feature representation and capture potential dependencies between regions."),a.createElement("li",null,"We conduct extensive experiments on four real-world epidemic-related datasets. The results show that our model achieves better performance than other state-of-the-art methods and demonstrates the effectiveness of each component.")),a.createElement(m.Z,null,a.createElement("div",{style:{width:"65%",marginLeft:"auto",marginRight:"auto"}},a.createElement(i.S,{src:"../images/SEFNet.png",alt:"sefnet",__imageData:n(604)}))),a.createElement(d.Z,null,a.createElement("div",{style:{width:"100%",marginLeft:"auto",marginRight:"auto"}},a.createElement(i.S,{src:"../images/SEFNet.png",alt:"sefnet",__imageData:n(604)})))),a.createElement("div",null,a.createElement("div",{style:{fontSize:"1.2rem",fontWeight:"bold",marginTop:"6px"}},"Experiments"),"We conduct experiments on four epidemic-related datasets, three are seasonal influenza datasets and one are COVID-19 datasets. More about the experimental results, please refer to the paper.")))),a.createElement(s.Z,{visibilityHeight:150}),a.createElement(c.Z,null))}},604:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/3573be5bbe7fa0230c966081862cb472/f6695/SEFNet.png","srcSet":"/static/3573be5bbe7fa0230c966081862cb472/37e39/SEFNet.png 450w,\\n/static/3573be5bbe7fa0230c966081862cb472/15611/SEFNet.png 900w,\\n/static/3573be5bbe7fa0230c966081862cb472/f6695/SEFNet.png 1800w","sizes":"(min-width: 1800px) 1800px, 100vw"},"sources":[{"srcSet":"/static/3573be5bbe7fa0230c966081862cb472/867a5/SEFNet.webp 450w,\\n/static/3573be5bbe7fa0230c966081862cb472/32883/SEFNet.webp 900w,\\n/static/3573be5bbe7fa0230c966081862cb472/cc930/SEFNet.webp 1800w","type":"image/webp","sizes":"(min-width: 1800px) 1800px, 100vw"}]},"width":1800,"height":828}')},631:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/5ef62eb23b78c92353382a4280c1af21/db938/sefnet-motivation.png","srcSet":"/static/5ef62eb23b78c92353382a4280c1af21/6dda3/sefnet-motivation.png 336w,\\n/static/5ef62eb23b78c92353382a4280c1af21/30fbc/sefnet-motivation.png 672w,\\n/static/5ef62eb23b78c92353382a4280c1af21/db938/sefnet-motivation.png 1344w","sizes":"(min-width: 1344px) 1344px, 100vw"},"sources":[{"srcSet":"/static/5ef62eb23b78c92353382a4280c1af21/3ca2f/sefnet-motivation.webp 336w,\\n/static/5ef62eb23b78c92353382a4280c1af21/e26dd/sefnet-motivation.webp 672w,\\n/static/5ef62eb23b78c92353382a4280c1af21/4cc6a/sefnet-motivation.webp 1344w","type":"image/webp","sizes":"(min-width: 1344px) 1344px, 100vw"}]},"width":1344,"height":640}')}}]);
//# sourceMappingURL=component---src-pages-sef-net-js-87db7ee7fca8ba0be937.js.map