import React, { Component } from "react";
import "./index.css";

export default class Website extends Component {
  getWebsite = (event) => {
    const { setAttribute } = this.props;
    setAttribute("website", event.target.value);
  };
  render() {
    const { personObj, website } = this.props;
    return (
      <div className="form-group">
        <label forname="website" className="col-sm-2 control-label">
          来源网站
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="website"
            onChange={this.getWebsite}
            value={personObj ? personObj.website : website}
          />
        </div>
      </div>
    );
  }
}
