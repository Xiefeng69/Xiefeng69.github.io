const getPublicationInfo = (types) => {
    //static/miuiplus.webp
    const pub_list = [
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Xin Song, Xiang Zeng, Xuechen Zhao, Lei Tian, Bin Zhou, Yusong Tan.",
            title: 'MixTEA: Semi-supervised Entity Alignment with Mixture Teaching',
            venues: 'The 2023 Conference on Empirical Methods in Natural Language Processing',
            abbr: 'EMNLP 2023',
            ccf: 'CCF-B',
            type: 'KG',
            pdf: 'https://arxiv.org/abs/2311.04441',
            code: 'https://github.com/Xiefeng69/MixTEA',
            page: '',
            slide: '',
            comment: '',
            tldr: ''
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Xiang Zeng, Bin Zhou and Yusong Tan.",
            title: 'Improving Knowledge Graph Entity Alignment with Graph Augmentation',
            venues: 'The 27th Pacific-Asia Conference on Knowledge Discovery and Data Mining',
            abbr: 'PAKDD 2023',
            ccf: 'CCF-C',
            type: 'KG',
            pdf: 'https://link.springer.com/chapter/10.1007/978-3-031-33377-4_1',
            code: 'https://github.com/Xiefeng69/GAEA',
            page: '',
            slide: '/static/GAEA_presentation.pdf',
            comment: '',
            tldr: 'This paper proposes GAEA, a novel entity alignment approach based on graph augmentation and graph neural networks. By addressing structural heterogeneity and incorporating rich relation semantics, GAEA enhances alignment performance on benchmark datasets.'
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>*, Zhong Zhang*, Xuechen Zhao, Haiyang Wang, Jiaying Zou, Lei Tian, Bin Zhou and Yusong Tan.",
            title: 'Adversarial Learning-based Stance Classifier for COVID-19-related Health Policies',
            venues: 'The 28th International Conference on Database Systems for Advanced Applications',
            abbr: 'DASFAA 2023',
            ccf: 'CCF-B',
            type: 'NLP',
            pdf: 'https://link.springer.com/chapter/10.1007/978-3-031-30678-5_18',
            poster: '/static/dasfaa-poster.pdf',
            code: 'https://github.com/Xiefeng69/stance-detection-for-covid19-related-health-policies',
            page: '',
            slide: '',
            comment: '',
            tldr: ' This paper proposes an adversarial learning-based stance classifier to identify public attitudes towards COVID-19 health policies, considering realistic cross-target and zero-shot settings. The model captures transferable knowledge, incorporates policy descriptions as external knowledge, and utilizes a GeoEncoder to represent regional background factors. Experimental results showcase state-of-the-art performance.',
        },
        // {
        //     author: "Hayat Dino Bedru, Chen Zhang, <span style={{fontWeight:'bold'}}>Feng Xie</span>, Shuo Yu, Iftikhar Hussain.",
        //     title: 'CLARA: Citation and Similarity-based Author Ranking',
        //     venues: '',
        //     abbr: 'Scientometrics',
        //     ccf: '',
        //     type: 'TSA',
        //     pdf: 'https://doi.org/10.1007/s11192-022-04590-5',
        //     code: '',
        //     page: '',
        //     slide: '',
        //     comment: 'This work was done when I was in DLUT'
        // },
        {
            author: "Xuechen Zhao, Jiaying Zou, Zhong Zhang, <span style='font-weight:bold'}>Feng Xie</span>, Bin Zhou and Lei Tian.",
            title: 'Feature Enhanced Zero-Shot Stance Detection via Contrastive Learning',
            venues: 'SIAM International Conference on Data Mining',
            abbr: 'SDM 2023',
            ccf: 'CCF-B',
            type: 'NLP',
            pdf: 'https://doi.org/10.1137/1.9781611977653.ch101',
            code: '',
            page: '',
            slide: '',
            comment: '',
            tldr: ''
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan.",
            title: 'EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting',
            venues: 'The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases',
            abbr: 'ECML-PKDD 2022',
            ccf: 'CCF-B',
            type: 'TSA',
            pdf: 'https://link.springer.com/chapter/10.1007/978-3-031-26422-1_29',
            code: 'https://github.com/Xiefeng69/EpiGNN',
            page: '/EpiGNN',
            slide: '/static/EpiGNN_presentation.pdf',
            comment: '',
            tldr: 'We propose EpiGNN, a graph neural network-based model, which enhances epidemic forecasting with spatial and temporal information, outperforming state-of-the-art baselines by 9.48% in RMSE on five real-world datasets.'
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan.",
            title: 'Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting',
            venues: 'The 34th International Conference on Software Engineering & Knowledge Engineering',
            abbr: 'SEKE 2022',
            ccf: 'CCF-C',
            type: 'TSA',
            pdf: 'http://dx.doi.org/10.18293/SEKE2022-109',
            code: 'https://github.com/Xiefeng69/SEFNet',
            page: '/SEFNet',
            slide: '',
            comment: '',
            tldr: 'SEFNet fusion network predicts infectious diseases by addressing inter- & intra-series dependencies, improving robustness & surpassing traditional methods.'
        },
    ]
    if (types == "all"){
        return pub_list
    }
    let new_pub_list = []
    for (const item of pub_list){
        if(item.type == types){
            new_pub_list.push(item)
        }
    }
    
    return new_pub_list
}

export default getPublicationInfo;