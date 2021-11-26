import React, { Component } from "react";
import "./index.css";

export default class Gender extends Component {
  state = { genderOption: ["全部", "男", "女"] };
  getGender = (event) => {
    const { setAttribute } = this.props;
    setAttribute("gender", event.target.value);
  };
  render() {
    const { genderOption } = this.state;
    const { personObj, gender } = this.props;
    return (
      <div className="form-group">
        <label forname="gender" className="col-sm-2 control-label">
          性别
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="gender"
            onChange={this.getGender}
            value={personObj ? personObj.gender : gender}
          >
            {genderOption.map((g, index) => {
              return <option key={index}>{g}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
