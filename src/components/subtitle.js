import * as React from 'react';
import { Divider } from 'antd';
import * as style from './subtitle.module.css';

const Subtitle = ({title, color="black"}) => {
    return (
        <div className={style.subtitlecontainer} className="anchorlink">
            <Divider orientation="left">
                <span className={style.subtitle} style={{color:color}}>{ title }</span>
            </Divider>
        </div>
    )
}

export default Subtitle