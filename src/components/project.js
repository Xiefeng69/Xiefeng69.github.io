import React from "react";
import IsMobile from '../utils/ismobile';
import IsDesktop from '../utils/isdesktop';
import Subtitle from "./subtitle";
import ProjectDesktop from "./projectdesktop";
import getProjectInfo from "../utils/getProjectInfo";

const Project = () => {
    return (
        <div>
            <Subtitle title="Projects"></Subtitle>
            <IsMobile>
                <p>hi</p>
            </IsMobile>
            <IsDesktop>
                <ul>
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