import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Subtitle from './subtitle';
import * as style from './experience.module.css';

const Experience = () => {
    return (
        <div>
            <Subtitle title="Experience" />
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
                    <StaticImage className='logo' src="../images/dut.png" alt="DUT" />
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