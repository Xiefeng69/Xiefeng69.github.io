const getPublicationInfo = (types) => {
    //static/miuiplus.webp
    const pub_list = [
        {
            author: "Feng Xie, Zhong Zhang, Liang Li, Bin Zhou and Yusong Tan.",
            title: 'EpiGNN: Exploring Spatial Transmission with Graph Neural Network for Regional Epidemic Forecasting',
            venues: 'The European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases',
            abbr: 'ECML-PKDD',
            ccf: 'CCF-B',
            type: 'TSA',
            pdf: 'https://www.researchgate.net/publication/361523245_EpiGNN_Exploring_Spatial_Transmission_with_Graph_Neural_Network_for_Regional_Epidemic_Forecasting',
            code: 'https://github.com/Xiefeng69/EpiGNN'
        },
        {
            author: "Feng Xie, Zhong Zhang, Xuechen Zhao, Bin Zhou and Yusong Tan.",
            title: 'Inter- and Intra-Series Embeddings Fusion Network for Epidemiological Forecasting',
            venues: 'The 34th International Conference on Software Engineering & Knowledge Engineering',
            abbr: 'SEKE2022',
            ccf: 'CCF-C',
            type: 'TSA',
            pdf: 'https://www.researchgate.net/publication/361098103_Inter-_and_Intra-Series_Embeddings_Fusion_Network_for_Epidemiological_Forecasting',
            code: 'https://github.com/Xiefeng69/SEFNet'
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