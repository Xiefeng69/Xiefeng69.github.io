import * as React from 'react';
import Experience from '../components/experience';
import Award from '../components/award';
import * as style from './right.module.css';

const Right = () => {
    return (
        <div className={style.rightcontainer}>
            <Experience />
            <Experience />
            <Award />
        </div>
    )
}

export default Right