import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Remark extends React.Component<Props> {
  getRemark = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("remark", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="remark" className="col-sm-2 control-label">
          备注
        </label>
        <div className="col-sm-5">
          <textarea
            className="form-control"
            id="remark"
            onChange={this.getRemark}
            value={personObj ? personObj.remark : person.remark}
          ></textarea>
        </div>
      </div>
    );
  }
}
