import * as React from "react";
import { nanoid } from "nanoid";
import "./index.css";
import AddTitle from "../../component/AddTitle";
import Time from "../../component/Time";
import Name from "../../component/Name";
import Telephone from "../../component/Telephone";
import Gender from "../../component/Gender";
import Fresh from "../../component/Fresh";
import School from "../../component/School";
import Education from "../../component/Education";
import Major from "../../component/Major";
import Post from "../../component/Post";
import Website from "../../component/Website";
import Remark from "../../component/Remark";
import Resume from "../../component/Resume";
import AddBtn from "../../component/AddBtn";
interface Props {
  addPerson: Function;
}
interface State {
  person: any;
}
export default class Add extends React.Component<Props, State> {
  state: State = {
    person: {
      id: nanoid(),
      checked:false,
    },
  };
  setAttribute = (key: string, value: string) => {
    const { person } = this.state;
    this.setState({ person: { ...person, [key]: value } });
  };
  render() {
    const { addPerson } = this.props;
    const { person } = this.state;
    return (
      <div className="form-horizontal col-md-offset-3">
        <AddTitle />
        <Time setAttribute={this.setAttribute} />
        <Name setAttribute={this.setAttribute} person={person} />
        <Telephone setAttribute={this.setAttribute} person={person} />
        <Gender setAttribute={this.setAttribute} person={person} />
        <Fresh setAttribute={this.setAttribute} person={person} />
        <School setAttribute={this.setAttribute} />
        <Major setAttribute={this.setAttribute} person={person} />
        <Education setAttribute={this.setAttribute} person={person} />
        <Post setAttribute={this.setAttribute} person={person} />
        <Website setAttribute={this.setAttribute} person={person} />
        <Remark setAttribute={this.setAttribute} person={person} />
        <Resume />
        <AddBtn addPerson={addPerson} person={person} />
      </div>
    );
  }
}
