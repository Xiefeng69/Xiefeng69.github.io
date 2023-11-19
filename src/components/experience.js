import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Subtitle from './subtitle';
import IsMobile from '../utils/ismobile';
import IsDesktop from '../utils/isdesktop';
import * as style from './experience.module.css';

const Experience = () => {
    return (
        <div>
            <Subtitle title="Experiences" />
            {/* 唯品会实习 */}
            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/vipshop.jpeg" alt="VIPSHOP" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2023.06 - 2023.09</span>
                    <br />
                    <IsMobile>
                        <span className={style.maininfo}>VIPSHOP, Intelligent Operations Department</span>
                        <br />
                        <i>NLP Intern</i>
                    </IsMobile>
                    <IsDesktop>
                        <span className={style.maininfo}>VIPSHOP, Intelligent Operations Department, <i>NLP Intern.</i></span>
                    </IsDesktop>
                </div>
            </div>
            {/* 国防科技大学 */}
            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/nudt.png" alt="NUDT" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2021.09 - present</span>
                    <br />
                    <IsMobile>
                        <span className={style.maininfo}>National University of Defense Technology</span>
                        <br />
                        <i>Master Candidate</i>
                    </IsMobile>
                    <IsDesktop>
                        <span className={style.maininfo}>National University of Defense Technology, <i>Master Candidate.</i></span>
                    </IsDesktop>
                </div>
            </div>
            {/* 小米集团 */}
            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/xiaomi.png" alt="Xiaomi" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2020.09 - 2021.01</span>
                    <br />
                    <IsMobile>
                        <span className={style.maininfo}>Xiaomi Technology Co., Ltd., Mi Group-1</span>
                        <br />
                        <i>Software Development Intern</i>
                    </IsMobile>
                    <IsDesktop>
                        <span className={style.maininfo}>Xiaomi Technology Co., Ltd., Mi Group-1, <i>Software Development Intern.</i></span>
                    </IsDesktop>
                </div>
            </div>
            {/* 大连理工大学 */}
            <div className={style.container} style={{marginBottom: '10px'}}>
                <div>
                    <StaticImage className='logo' src="../images/dlut.png" alt="DLUT" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2017.09 - 2021.06</span>
                    <br />
                    <IsMobile>
                        <span className={style.maininfo}>Dalian University of Technology</span>
                        <br />
                        <i>Bachelor</i>
                    </IsMobile>
                    <IsDesktop>
                        <span className={style.maininfo}>Dalian University of Technology, <i>Bachelor.</i></span>
                    </IsDesktop>
                </div>
            </div>
        </div>
    )
}

export default Experience;