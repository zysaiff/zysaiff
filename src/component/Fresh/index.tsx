import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Fresh extends React.Component<Props> {
  getFresh = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("isfresh", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    const freshOption = ["全部", "是", "否"];
    return (
      <div className="form-group">
        <label htmlFor="fresh" className="col-sm-2 control-label">
          应届生
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="fresh"
            onChange={this.getFresh}
            value={personObj ? personObj.isfresh : person.isfresh}
          >
            {freshOption.map((g, index) => {
              return <option key={index}>{g}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
