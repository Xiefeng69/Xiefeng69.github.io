import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from 'antd'
import './intro.css';
import styled from 'styled-components';

const Headline = styled.p`
    font-size: 16px;
    font-weight: 800;
`

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="avatar-box">
                <StaticImage className="avatar" src="../images/avatar.png" />
            </div>
            <div className="intro-box">
                <Headline>Hey guys, I am Xiefeng69 ~ </Headline>
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

export default Intro