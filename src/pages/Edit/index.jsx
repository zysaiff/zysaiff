import React, { Component } from "react";
import "./index.css";
import EditTitle from "../../component/EditTitle";
import Name from "../../component/Name";
import Telephone from "../../component/Telephone";
import Gender from "../../component/Gender";
import Time from "../../component/Time";
import Fresh from "../../component/Fresh";
import Education from "../../component/Education";
import Major from "../../component/Major";
import Post from "../../component/Post";
import Website from "../../component/Website";
import Remark from "../../component/Remark";
import Resume from "../../component/Resume";
import EditBtn from "../../component/EditBtn";
export default class Edit extends Component {
  state = {
    personObj: this.props.person,
  };
  setAttribute = (key, value) => {
    const { personObj } = this.state;
    const newPersonObj = { ...personObj, [key]: value };
    this.setState({ personObj: newPersonObj });
  };
  render() {
    const { editPerson } = this.props;
    const { personObj } = this.state;
    return (
      <div className="form-horizontal col-md-offset-3">
        <EditTitle />
        <Name setAttribute={this.setAttribute} personObj={personObj} />
        <Telephone setAttribute={this.setAttribute} personObj={personObj} />
        <Gender setAttribute={this.setAttribute} personObj={personObj} />
        <Time setAttribute={this.setAttribute} personObj={personObj} />
        <Fresh setAttribute={this.setAttribute} personObj={personObj} />
        <Education setAttribute={this.setAttribute} personObj={personObj} />
        <Major setAttribute={this.setAttribute} personObj={personObj} />
        <Post setAttribute={this.setAttribute} personObj={personObj} />
        <Website setAttribute={this.setAttribute} personObj={personObj} />
        <Remark setAttribute={this.setAttribute} personObj={personObj} />
        <Resume />
        <EditBtn editPerson={editPerson} personObj={personObj} />
      </div>
    );
  }
}
