import * as React from "react";
import FilterTitle from "../../component/FilterTitle";
import FilterTime from "../../component/FilterTime";
import Gender from "../../component/Gender";
import Fresh from "../../component/Fresh";
import Education from "../../component/Education";
import Major from "../../component/Major";
import Post from "../../component/Post";
import Website from "../../component/Website";
import FilterBtn from "../../component/FilterBtn";
import "./index.css";
interface Props {
  filterPerson: Function;
}
interface State {
  personObj: any;
}
export default class Filter extends React.Component<Props, State> {
  state = {
    personObj: {
      startTime: "",
      endTime: "",
      gender: "",
      isfresh: "",
      education: "",
      major: "",
      post: "",
      website: "",
    },
  };
  setAttribute = (key: string, value: string) => {
    const { personObj } = this.state;
    this.setState({ personObj: { ...personObj, [key]: value } });
  };
  render() {
    const { filterPerson } = this.props;
    const { personObj } = this.state;
    return (
      <div className="form-horizontal col-md-offset-3">
        <FilterTitle />
        <FilterTime setAttribute={this.setAttribute} />
        <Gender setAttribute={this.setAttribute} personObj={personObj} />
        <Fresh setAttribute={this.setAttribute} personObj={personObj} />
        <Education setAttribute={this.setAttribute} personObj={personObj} />
        <Major setAttribute={this.setAttribute} personObj={personObj} />
        <Post setAttribute={this.setAttribute} personObj={personObj} />
        <Website setAttribute={this.setAttribute} personObj={personObj} />
        <FilterBtn filterPerson={filterPerson} personObj={personObj} />
      </div>
    );
  }
}
