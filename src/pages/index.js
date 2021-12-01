import * as React from "react"
import "antd/dist/antd.css";
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
    <Footer />
  </div>
)

export default IndexPage
