import React from "react";
import { Portal } from "react-portal";
import * as style from './anchor.module.css';

const Anchor = () => {
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
    return (
        <Portal>
            <div className={style.container}>
                <p onClick={() => {scrollTo(0)}}>Experiences</p>
                <p onClick={() => {scrollTo(1)}}>Projects</p>
                <p onClick={() => {scrollTo(2)}}>Awards</p>
            </div>
        </Portal>
    )
}

export default Anchor