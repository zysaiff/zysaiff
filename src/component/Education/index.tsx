import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Education extends React.Component<Props> {
  getEducation = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("education", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    const deucationOption = ["全部", "专科", "本科", "研究生"];
    return (
      <div className="form-group">
        <label htmlFor="education" className="col-sm-2 control-label">
          学历
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="education"
            onChange={this.getEducation}
            value={personObj ? personObj.education : person.education}
          >
            {deucationOption.map((e, index) => {
              return <option key={index}>{e}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
