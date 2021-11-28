import * as React from 'react';
import { Divider } from 'antd';
import * as style from './subtitle.module.css';

const Subtitle = ({title}) => {
    return (
        <div className={style.subtitlecontainer}>
            <Divider orientation="left">
                <span className={style.subtitle}>{ title }</span>
            </Divider>
        </div>
    )
}

export default Subtitle