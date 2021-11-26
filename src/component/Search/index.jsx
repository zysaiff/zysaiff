import React, { Component } from "react";
import "./index.css";

export default class Search extends Component {
  handleSearch = () => {
    const { input } = this;
    this.props.getObjByname(input.value);
  };
  render() {
    return (
      <div className="col-sm-4">
        <div className="input-group">
          <input
            ref={(c) => (this.input = c)}
            type="text"
            className="form-control"
            placeholder="请输入姓名"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.handleSearch}
            >
              搜索
            </button>
          </span>
        </div>
      </div>
    );
  }
}
