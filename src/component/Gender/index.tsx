import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Gender extends React.Component<Props> {
  getGender = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("gender", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    const genderOption = ["全部", "男", "女"];
    return (
      <div className="form-group">
        <label htmlFor="gender" className="col-sm-2 control-label">
          性别
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="gender"
            onChange={this.getGender}
            value={personObj ? personObj.gender : person.gender}
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
