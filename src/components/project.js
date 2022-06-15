import React from "react";
import IsMobile from '../utils/ismobile';
import IsDesktop from '../utils/isdesktop';
import Subtitle from "./subtitle";
import ProjectDesktop from "./projectdesktop";
import ProjectMobile from "./projectmobile";
import getProjectInfo from "../utils/getProjectInfo";

const Project = () => {
    return (
        <div>
            <Subtitle title="Projects"></Subtitle>
            <IsMobile>
                {
                    getProjectInfo().map((item, index) => {
                        return (<ProjectMobile key={index} time={item.time} name={item.name} image={item.image} extra={item.extraInfo} />)
                    })
                }
            </IsMobile>
            <IsDesktop>
                <ul style={{lineHeight:1}}>
                    {
                        getProjectInfo().map((item, index) => {
                            return (<ProjectDesktop key={index} time={item.time} name={item.name} extra={item.extraInfo} />)
                        })
                    }
                </ul>
            </IsDesktop>
        </div>
    )
}

export default Project;