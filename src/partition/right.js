import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from 'antd'
import './right.css';

const Right = () => {
    return (
        <div className="intro-container">
            <div className="avatar-box">
                <StaticImage className="avatar" src="../images/avatar.png" />
            </div>
            <div className="intro-box">
                <p>Hey guys, I am Xiefeng69 ~ </p>
                <p>Now I am a master in NUDT majored in CS.</p>
                <p>My interest is ML, Web development and cluster.</p>
                <div className="button-box">
                    <Button type="primary" shape="round" size='middle'>
                        Github
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Right