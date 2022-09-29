const getPublicationInfo = (types) => {
    //static/miuiplus.webp
    const pub_list = [
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>*, Zhong Zhang*, Xuechen Zhao, Jiaying Zou, Bin Zhou and Yusong Tan.",
            title: 'Adversarial Learning-based Stance Classifier for COVID-19-related Health Policies',
            venues: 'preprint',
            abbr: 'arxiv',
            ccf: 'Under review',
            type: 'NLP',
            pdf: 'https://arxiv.org/abs/2209.04631',
            code: 'https://github.com/Xiefeng69/stance-detection-for-covid19-related-health-policies',
            page: '',
            slide: ''
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan.",
            title: 'EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting',
            venues: 'The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases',
            abbr: 'ECML-PKDD',
            ccf: 'CCF-B',
            type: 'TSA',
            pdf: 'https://2022.ecmlpkdd.org/wp-content/uploads/2022/09/sub_829.pdf',
            code: 'https://github.com/Xiefeng69/EpiGNN',
            page: '/EpiGNN',
            slide: '/static/EpiGNN_presentation.pdf'
        },
        {
            author: "<span style='font-weight:bold'}>Feng Xie</span>, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan.",
            title: 'Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting',
            venues: 'The 34th International Conference on Software Engineering & Knowledge Engineering',
            abbr: 'SEKE2022',
            ccf: 'CCF-C',
            type: 'TSA',
            pdf: 'http://dx.doi.org/10.18293/SEKE2022-109',
            code: 'https://github.com/Xiefeng69/SEFNet',
            page: '/SEFNet',
            slide: ''
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