import React, { Component } from "react";
import "./index.css";

export default class Telephone extends Component {
  getTelephone = (event) => {
    const { setAttribute } = this.props;
    setAttribute("phoneNum", event.target.value);
  };
  render() {
    const { personObj, phoneNum } = this.props;
    return (
      <div className="form-group">
        <label forname="telephone" className="col-sm-2 control-label">
          电话
        </label>
        <div className="col-sm-5">
          <input
            type="number"
            className="form-control"
            id="telephone"
            placeholder="电话"
            onChange={this.getTelephone}
            value={personObj ? personObj.phoneNum : phoneNum}
          />
        </div>
      </div>
    );
  }
}
