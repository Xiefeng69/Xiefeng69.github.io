import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Divider } from "antd";
// import styled from "styled-components";
import * as style from './anchor.module.css';

/*const AnchorContainer = styled.div`
    width: 100%;
    background: white;
    padding: 12px 16px 12px 16px;
    box-shadow: 0 4px 13px -3px rgb(0 0 0 / 10%);
    border-bottom: 1px solid #d2d2d2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: fixed;
    top: 0px;
    z-index: 100;
`*/

const Anchor = () => {
    const [panelVisible, setPanelVisible] = useState(false)
    const scrollTo = (idx) => {
        /*
        let scrollTarget = document.getElementsByClassName('anchorlink')[idx].offsetTop
        console.log(scrollTarget)
        document.body.scrollTop = scrollTarget
        document.documentElement.scrollTop = scrollTarget
        window.pageYOffset = scrollTarget
        */
        document.getElementsByClassName('anchorlink')[idx].scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
        setPanelVisible(false)
    }
    const switchVisible = () => {
        console.log(
            'hi'
        );
        setPanelVisible(!panelVisible)
    }
    return (
        <div className={style.container}>
            <div className={style.solidContent}></div>
            <div className={style.anchorContainer}>
                <div className={style.anchorNav}>
                    <div className={style.anchorInfo}>
                        <StaticImage src='../images/avatar.png' style={{width: '34px'}} imgStyle={{borderRadius: '50%'}} />
                        <span style={{fontWeight:'bold', fontSize:'1.2rem', marginLeft: '8px'}}>Xiefeng</span>
                    </div>
                    <div className={style.anchorSwitch} onClick={switchVisible}>
                        <StaticImage src='../images/list.png' style={{width: '24px'}} />
                    </div>
                </div>
                <div>
                    {
                        panelVisible ?
                        <div className={style.anchorPanel}>
                            <Divider style={{margin: '0px', marginTop: '12px'}} />
                            <p onClick={() => {scrollTo(0)}}>Experiences</p>
                            <Divider style={{margin: '0px'}}  />
                            <p onClick={() => {scrollTo(1)}}>Projects</p>
                            <Divider style={{margin: '0px'}} />
                            <p onClick={() => {scrollTo(2)}}>Awards</p>
                        </div>
                        : null
                    }
                </div>
            </div> 
        </div>
    )
}

export default Anchor