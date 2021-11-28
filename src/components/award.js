import * as React from 'react';
import Subtitle from './subtitle';
import getAwardInfo from '../utils/getAwardInfo';

const Award = () => {
    return (
        <div>
            <Subtitle title="Award" />
            <ul>
                {
                    getAwardInfo().map((item, index) => {
                        return (<li key={index}>{`${item.time}, ${item.name}.`}</li>)   
                    })
                }
            </ul>
        </div>
    )
}

export default Award;
