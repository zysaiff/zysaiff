import * as React from "react";
import "./index.css";
import left_img from "./img/left.png";
import right_img from "./img/right.png";
interface Props {
  setUp: Function;
  setDown: Function;
  pagenum: number;
  pageSize: number;
  totalPage: number;
}
export default class ChangePage extends React.Component<Props> {
  //上一页
  handleUp = () => {
    if (this.props.pagenum > 1) {
      this.props.setUp();
    }
  };
  //下一页
  handleDown = () => {
    if (this.props.pagenum < this.props.totalPage) {
      this.props.setDown();
    }
  };
  render() {
    const { pagenum, totalPage } = this.props;
    return (
      <div className="footer-page">
        <button className="btn btn-info" onClick={this.handleUp}>
          <img src={left_img} alt="up" />
        </button>
        <span>
          {pagenum}/{totalPage}页
        </span>
        <button className="btn btn-info" onClick={this.handleDown}>
          <img src={right_img} alt="down" />
        </button>
      </div>
    );
  }
}
