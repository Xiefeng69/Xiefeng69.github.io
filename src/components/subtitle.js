import * as React from 'react';
import { Divider } from 'antd';
import './subtitle.css'

const Subtitle = ({title}) => {
    return (
        <div>
            <Divider>{title}</Divider>
        </div>
    )
}

export default Subtitle