import * as React from "react";
import "./index.css";
interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Telephone extends React.Component<Props> {
  getTelephone = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("phoneNum", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="telephone" className="col-sm-2 control-label">
          电话
        </label>
        <div className="col-sm-5">
          <input
            type="number"
            className="form-control"
            id="telephone"
            placeholder="电话"
            onChange={this.getTelephone}
            value={personObj ? personObj.phoneNum : person.phoneNum}
          />
        </div>
      </div>
    );
  }
}
