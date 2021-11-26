import React, { Component } from "react";
import "./index.css";
import Sort_img from "./img/sort.png";
export default class Sortord extends Component {
  state = { flag: false };
  handleSort = () => {
    const { flag } = this.state;
    this.setState({ flag: !flag }, function () {
      if (this.state.flag) {
        this.props.sortUp();
      } else {
        this.props.sortDown();
      }
    });
  };
  render() {
    return (
      <div className="footer-sort">
        <button className="btn btn-info" onClick={this.handleSort}>
          <img src={Sort_img} alt="sort" />
        </button>
      </div>
    );
  }
}
