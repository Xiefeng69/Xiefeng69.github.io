import * as React from 'react';
import * as style from './right.module.css';
import Experience from '../components/experience';
import Award from '../components/award';
import Project from '../components/project';
import Introduction from '../components/introduction';
import IsDesktop from '../utils/isdesktop';

const Right = () => {
    return (
        <div className={style.rightcontainer}>
            <IsDesktop>
                <Introduction />
            </IsDesktop>
            <Experience />
            <Project />
            <Award />
        </div>
    )
}

export default Right