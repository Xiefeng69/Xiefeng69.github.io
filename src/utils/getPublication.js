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
            tldr: 'Semi-supervised entity alignment (EA) is a practical and challenging task because of the lack of adequate labeled mappings as training data. Most works address this problem by generating pseudo mappings for unlabeled entities. However, they either suffer from the erroneous (noisy) pseudo mappings or largely ignore the uncertainty of pseudo mappings. In this paper, we propose a novel semi-supervised EA method, termed as MixTEA, which guides the model learning with an end-to-end mixture teaching of manually labeled mappings and probabilistic pseudo mappings. We firstly train a student model using few labeled mappings as standard. More importantly, in pseudo mapping learning, we propose a bi-directional voting (BDV) strategy that fuses the alignment decisions in different directions to estimate the uncertainty via the joint matching confidence score. Meanwhile, we also design a matching diversity-based rectification (MDR) module to adjust the pseudo mapping learning, thus reducing the negative influence of noisy mappings. Extensive results on benchmark datasets as well as further analyses demonstrate the superiority and the effectiveness of our proposed method.'
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
            tldr: "Entity alignment (EA) which links equivalent entities across different knowledge graphs (KGs) plays a crucial role in knowledge fusion. In recent years, graph neural networks (GNNs) have been successfully applied in many embedding-based EA methods. However, existing GNN-based methods either suffer from the structural heterogeneity issue that especially appears in the real KG distributions or ignore the heterogeneous representation learning for unseen (unlabeled) entities, which would lead the model to overfit on few alignment seeds (i.e., training data) and thus cause unsatisfactory alignment performance. To enhance the EA ability, we propose GAEA, a novel EA approach based on graph augmentation. In this model, we design a simple Entity-Relation (ER) Encoder to generate latent representations for entities via jointly modeling comprehensive structural information and rich relation semantics. Moreover, we use graph augmentation to create two graph views for margin-based alignment learning and contrastive entity representation learning, thus mitigating structural heterogeneity and further improving the model's alignment performance. Extensive experiments conducted on benchmark datasets demonstrate the effectiveness of our method."
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
            tldr: "The ongoing COVID-19 pandemic has caused immeasurable losses for people worldwide. To contain the spread of the virus and further alleviate the crisis, various health policies (e.g., stay-at-home orders) have been issued which spark heated discussions as users turn to share their attitudes on social media. In this paper, we consider a more realistic scenario on stance detection (i.e., cross-target and zero-shot settings) for the pandemic and propose an adversarial learning-based stance classifier to automatically identify the public's attitudes toward COVID-19-related health policies. Specifically, we adopt adversarial learning that allows the model to train on a large amount of labeled data and capture transferable knowledge from source topics, so as to enable generalize to the emerging health policies with sparse labeled data. To further enhance the model's deeper understanding, we incorporate policy descriptions as external knowledge into the model. Meanwhile, a GeoEncoder is designed which encourages the model to capture unobserved background factors specified by each region and then represent them as non-text information. We evaluate the performance of a broad range of baselines on the stance detection task for COVID-19-related health policies, and experimental results show that our proposed method achieves state-of-the-art performance in both cross-target and zero-shot settings.",
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
            tldr: 'Zero-shot stance detection is challenging because it requires detecting the stance of previously unseen targets in the inference phase. The ability to learn transferable target-invariant features is critical for zero-shot stance detection. In this paper, we propose a stance detection approach that can efficiently adapt to unseen targets, the core of which is to capture target-invariant syntactic expression patterns as transferable knowledge. To be specific, we first augment the data by masking the topic words of sentences, and then feed the augmented data to an unsupervised contrastive learning module to capture transferable features. Besides, to fit a specific target, we encode the raw text as target-specific features. Finally, we adopt an attention mechanism, which combines syntactic expression patterns with target-specific features to obtain enhanced features for predicting previously unseen targets. Experiments demonstrate that our model outperforms baselines on four benchmark datasets.'
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
            tldr: "Epidemic forecasting is the key to effective control of epidemic transmission and helps the world mitigate the crisis that threatens public health. To better understand the transmission and evolution of epidemics, we propose EpiGNN, a graph neural network-based model for epidemic forecasting. Specifically, we design a transmission risk encoding module to characterize local and global spatial effects of regions in epidemic processes and incorporate them into the model. Meanwhile, we develop a Region-Aware Graph Learner (RAGL) that takes transmission risk, geographical dependencies, and temporal information into account to better explore spatial-temporal dependencies and makes regions aware of related regions' epidemic situations. The RAGL can also combine with external resources, such as human mobility, to further improve prediction performance. Comprehensive experiments on five real-world epidemic-related datasets (including influenza and COVID-19) demonstrate the effectiveness of our proposed method and show that EpiGNN outperforms state-of-the-art baselines by 9.48% in RMSE."
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
            tldr: 'The accurate forecasting of infectious epidemic diseases is the key to effective control of the epidemic situation in a region. Most existing methods ignore potential dynamic dependencies between regions or the importance of temporal dependencies and inter-dependencies between regions for prediction. In this paper, we propose an Inter- and Intra-Series Embeddings Fusion Network (SEFNet) to improve epidemic prediction performance. SEFNet consists of two parallel modules, named Inter-Series Embedding Module and Intra-Series Embedding Module. In Inter-Series Embedding Module, a multi-scale unified convolution component called Region-Aware Convolution is proposed, which cooperates with self-attention to capture dynamic dependencies between time series obtained from multiple regions. The Intra-Series Embedding Module uses Long Short-Term Memory to capture temporal relationships within each time series. Subsequently, we learn the influence degree of two embeddings and fuse them with the parametric-matrix fusion method. To further improve the robustness, SEFNet also integrates a traditional autoregressive component in parallel with nonlinear neural networks. Experiments on four real-world epidemic-related datasets show SEFNet is effective and outperforms state-of-the-art baselines.'
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