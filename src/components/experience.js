import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Subtitle from './subtitle';
import * as style from './experience.module.css';

const Experience = () => {
    return (
        <div>
            <Subtitle title="Experiences" />
            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/vipshop.jpeg" alt="VIPSHOP" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2023.06 - 2023.09</span>
                    <br />
                    <span className={style.maininfo}>VIPSHOP, Intelligent Operations Department, <i>NLP Intern.</i></span>
                </div>
            </div>

            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/nudt.png" alt="NUDT" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2021.09 - present</span>
                    <br />
                    <span className={style.maininfo}>National University of Defense Technology, <i>Master Candidate.</i></span>
                </div>
            </div>

            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/xiaomi.png" alt="Xiaomi" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2020.09 - 2021.01</span>
                    <br />
                    <span className={style.maininfo}>Xiaomi Technology Co., Ltd., Mi Group-1, <i>Software Development Intern.</i></span>
                </div>
            </div>

            <div className={style.container} style={{marginBottom: '10px'}}>
                <div>
                    <StaticImage className='logo' src="../images/dlut.png" alt="DLUT" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2017.09 - 2021.06</span>
                    <br />
                    <span className={style.maininfo}>Dalian University of Technology, <i>Bachelor.</i></span>
                </div>
            </div>
        </div>
    )
}

export default Experience;