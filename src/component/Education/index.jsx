import React, { Component } from "react";
import "./index.css";

export default class Education extends Component {
  state = { deucation: ["全部", "专科", "本科", "研究生"] };
  getEducation = (event) => {
    const { setAttribute } = this.props;
    setAttribute("education", event.target.value);
  };
  render() {
    const { deucation } = this.state;
    const { personObj, education } = this.props;
    return (
      <div className="form-group">
        <label forname="education" className="col-sm-2 control-label">
          学历
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="education"
            onChange={this.getEducation}
            value={personObj ? personObj.education : education}
          >
            {deucation.map((e, index) => {
              return <option key={index}>{e}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
