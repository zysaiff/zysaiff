import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Website extends React.Component<Props> {
  getWebsite = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("website", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="website" className="col-sm-2 control-label">
          来源网站
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="website"
            onChange={this.getWebsite}
            value={personObj ? personObj.website : person.website}
          />
        </div>
      </div>
    );
  }
}
