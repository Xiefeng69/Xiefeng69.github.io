import * as React from 'react';
import { Divider } from 'antd';
import * as style from './subtitle.module.css';

const Subtitle = ({title, subinfo=null, color="black"}) => {
    return (
        <div className={style.subtitlecontainer} className="anchorlink">
            <Divider orientation="left">
                <span className={style.subtitle} style={{color:color}}>{ title }</span>
                {subinfo?
                <span style={{fontSize:'14px'}}> {subinfo}</span>:null}
            </Divider>
        </div>
    )
}

export default Subtitle