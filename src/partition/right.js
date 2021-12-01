import * as React from 'react';
import * as style from './right.module.css';
import Experience from '../components/experience';
import Award from '../components/award';
import Project from '../components/project';

const Right = () => {
    return (
        <div className={style.rightcontainer}>
            <Experience />
            <Project />
            <Award />
        </div>
    )
}

export default Right