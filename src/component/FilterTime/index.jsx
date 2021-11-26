import React, { Component } from "react";
import { DatePicker } from "@fluentui/react";

import "./index.css";

export default class FilterTime extends Component {
  getStartTime = (event) => {
    const { setAttribute } = this.props;
    setAttribute("startTime", event.target.innerText);
  };
  getEndTime = (event) => {
    const { setAttribute } = this.props;
    setAttribute("endTime", event.target.innerText);
  };
  onFormatDate = (date) => {
    return !date ? '' :date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  };
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">简历投递时间</label>
        <div className="col-sm-2">
          <DatePicker placeholder="开始时间" formatDate={this.onFormatDate} onBlur={this.getStartTime} />
        </div>
        <div className="col-sm-2">
          <DatePicker placeholder="结束时间" formatDate={this.onFormatDate} onBlur={this.getEndTime} />
        </div>
      </div>
    );
  }
}
