import * as React from "react";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Name extends React.Component<Props> {
  getName = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("name", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="name" className="col-sm-2 control-label">
          姓名
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="姓名"
            onChange={this.getName}
            value={personObj ? personObj.name : person.name}
          />
        </div>
      </div>
    );
  }
}
