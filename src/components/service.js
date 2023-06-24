import * as React from 'react';
import Subtitle from './subtitle';

const Service = () => {
    return (
        <div>
            <Subtitle title="Academic Services" />
            <ul style={{lineHeight:1}}>
                <li style={{fontSize:'1rem'}}>[2023] Review for IEEE Transactions on Neural Networks and Learning Systems (IEEE TNNLS)</li>
                <li style={{fontSize:'1rem'}}>[2022, 2023] Review for IEEE Journal of Biomedical and Health Informatics (IEEE JBHI)</li>
            </ul>
        </div>
    )
}

export default Service;
