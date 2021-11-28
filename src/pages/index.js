import * as React from "react"
import Right from '../partition/right'
import Left from "../partition/left";
import './index.css';
import "antd/dist/antd.css";

const IndexPage = () => (
  <div className="main">
    <Left />
    <Right />
  </div>
)

export default IndexPage
