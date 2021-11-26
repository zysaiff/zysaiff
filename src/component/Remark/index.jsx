import React, { Component } from "react";
import "./index.css";

export default class Remark extends Component {
  getRemark = (event) => {
    const { setAttribute } = this.props;
    setAttribute("remark", event.target.value);
  };
  render() {
    const { personObj, remark } = this.props;
    return (
      <div className="form-group">
        <label forname="remark" className="col-sm-2 control-label">
          备注
        </label>
        <div className="col-sm-5">
          <textarea className="form-control" rows="4" id="remark" onChange={this.getRemark}
            value={personObj ? personObj.remark : remark} >
          </textarea>
        </div>
      </div>
    );
  }
}
