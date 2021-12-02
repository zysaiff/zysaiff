import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
}
export default class School extends React.Component<Props> {
  getSchool = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("school", event.target.value);
  };
  render() {
    return (
      <div className="form-group">
        <label htmlFor="school" className="col-sm-2 control-label">
          毕业院校
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="school"
            onChange={this.getSchool}
          />
        </div>
      </div>
    );
  }
}
