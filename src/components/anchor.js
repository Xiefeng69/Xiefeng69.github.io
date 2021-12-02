import React, { useState } from "react";
import styled from "styled-components";
import * as style from './anchor.module.css';

const AnchorContainer = styled.div`
    padding: 10px 10px 5px 10px;
    width: 100%;
    background: white;
    box-shadow: 0 4px 13px -3px rgb(0 0 0 / 10%);
    border-bottom: 1px solid #d2d2d2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: fixed;
    top: 0px;
    z-index: 100;
`

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
            behavior: "smooth"
        })
    }
    const switchVisible = () => {
        setPanelVisible(!panelVisible)
    }
    return (
        <AnchorContainer>
            <div className={style.anchorNav}>
                <span onClick={() => {scrollTo(0)}}>Experiences</span>
                <p onClick={() => {scrollTo(1)}}>Projects</p>
                <p onClick={() => {scrollTo(2)}}>Awards</p>
                <p onClick={switchVisible}>x</p>
            </div>
            <div className={style.anchorPart}>
                {
                    panelVisible ?
                    <div className={style.anchorPanel}>
                        <span>Experiences</span>
                        <span>Projects</span>
                        <span>Awards</span>
                    </div>
                    : null
                }
            </div>
        </AnchorContainer> 
    )
}

export default Anchor