import * as React from "react";
import { DatePicker } from "@fluentui/react";
import "./index.css";

interface Props {
  setAttribute: Function;
  personObj?: any;
}
interface State {
  date: Date;
}
export default class Time extends React.Component<Props, State> {
  state: State={
    date:new Date()
  }
  getTime = (event: any) => {
    const { setAttribute } = this.props;
    setAttribute("time", event.target.innerText);
  };
  onFormatDate = (date?: Date) => {
    return !date ? "" : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };
  componentDidMount(){
    const { setAttribute, personObj } = this.props;
    if(!personObj){
      const date: Date = this.state.date;
      setAttribute("time", date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
    }
  }
  render() {
    const { personObj } = this.props;
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">简历投递时间</label>
        <div className="col-sm-2">
          <DatePicker
            placeholder="时间"
            formatDate={this.onFormatDate}
            onBlur={this.getTime}
            value={personObj ? new Date(personObj.time) : this.state.date}
          />
        </div>
      </div>
    );
  }
}
