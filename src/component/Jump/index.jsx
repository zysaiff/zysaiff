import React, { Component } from "react";
import "./index.css";
import Jump_img from "./img/jump.png";
export default class Jump extends Component {
  state = { pageNum: 1 };
  handleJump = () => {
    const { input } = this;
    if (input.value > this.props.totalPage) {
      this.setState({ pageNum: this.props.totalPage }, function () {
        input.value = this.props.totalPage;
        this.props.jumpPage(this.state.pageNum);
      });
    } else if (input.value > 0) {
      this.setState({ pageNum: input.value }, function () {
        this.props.jumpPage(this.state.pageNum);
      });
    } else {
      input.value = 1;
      this.props.jumpPage(1);
    }
  };
  render() {
    return (
      <div className="footer-jump">
        <span>跳转到: </span>
        <input
          type="number"
          className="footer-jump-input"
          ref={(c) => (this.input = c)}
        />
        <button className="btn btn-info" onClick={this.handleJump}>
          <img src={Jump_img} alt="jump" />
        </button>
      </div>
    );
  }
}
