import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Major extends React.Component<Props> {
  getMajor = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("major", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="major" className="col-sm-2 control-label">
          专业
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="major"
            onChange={this.getMajor}
            value={personObj ? personObj.major : person.major}
          />
        </div>
      </div>
    );
  }
}
