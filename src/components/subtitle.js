import * as React from 'react';
import { Row, Col, Divider } from 'antd';
import './subtitle.css'

const Subtitle = ({title}) => {
    return (
        <div className="Subtitle-container">
            <Divider>{ title }</Divider>
        </div>
    )
}

export default Subtitle