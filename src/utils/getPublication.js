const getPublicationInfo = (types) => {
    //static/miuiplus.webp
    const pub_list = [
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>*, Zhong Zhang*, Xuechen Zhao, Haiyang Wang, Jiaying Zou, Lei Tian, Bin Zhou and Yusong Tan.",
            title: 'Adversarial Learning-based Stance Classifier for COVID-19-related Health Policies',
            venues: 'The 28th International Conference on Database Systems for Advanced Applications',
            abbr: 'DASFAA',
            ccf: 'CCF-B',
            type: 'NLP',
            pdf: '/static/DASFAA2023.pdf',
            code: 'https://github.com/Xiefeng69/stance-detection-for-covid19-related-health-policies',
            page: '',
            slide: '',
            comment: ''
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
            abbr: 'SDM',
            ccf: 'CCF-B',
            type: 'NLP',
            pdf: '',
            code: '',
            page: '',
            slide: '',
            comment: ''
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan.",
            title: 'EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting',
            venues: 'The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases',
            abbr: 'ECML-PKDD',
            ccf: 'CCF-B',
            type: 'TSA',
            pdf: 'https://arxiv.org/abs/2208.11517.pdf',
            code: 'https://github.com/Xiefeng69/EpiGNN',
            page: '/EpiGNN',
            slide: '/static/EpiGNN_presentation.pdf',
            comment: ''
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan.",
            title: 'Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting',
            venues: 'The 34th International Conference on Software Engineering & Knowledge Engineering',
            abbr: 'SEKE',
            ccf: 'CCF-C',
            type: 'TSA',
            pdf: 'http://dx.doi.org/10.18293/SEKE2022-109',
            code: 'https://github.com/Xiefeng69/SEFNet',
            page: '/SEFNet',
            slide: '',
            comment: ''
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