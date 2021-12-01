import * as React from "react"
import "antd/dist/antd.css";
import { BackTop } from "antd";
import Right from '../partition/right'
import Left from "../partition/left";
import Footer from '../partition/footer';
import IsDesktop from "../utils/isdesktop";
import './index.css';

const IndexPage = () => (
  <div>
    <div className="main">
      <Left />
      <IsDesktop>
        <div style={{width:'24px'}}></div>
      </IsDesktop>
      <Right />
    </div>
    <BackTop visibilityHeight={150} />
    <Footer />
  </div>
)

export default IndexPage
