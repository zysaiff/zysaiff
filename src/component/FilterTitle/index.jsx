import React, { Component } from "react";

export default class FilterTitle extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-6 control-label">
          <h1>
            过滤信息 <small>filter information</small>
          </h1>
        </label>
      </div>
    );
  }
}
