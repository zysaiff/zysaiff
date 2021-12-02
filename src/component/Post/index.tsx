import * as React from "react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
  person?: any;
}
export default class Post extends React.Component<Props> {
  getPost = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("post", event.target.value);
  };
  render() {
    const { personObj, person } = this.props;
    const postOption = ["全部", "Developer", "QA", "BA", "Support"];
    return (
      <div className="form-group">
        <label htmlFor="post" className="col-sm-2 control-label">
          应聘岗位
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="post"
            onChange={this.getPost}
            value={personObj ? personObj.post : person.post}
          >
            {postOption.map((g, index) => {
              return <option key={index}>{g}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
