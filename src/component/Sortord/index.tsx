import * as React from "react";
import "./index.css";
import Sort_img from "./img/sort.png";

interface Props {
  sortUp: Function;
  sortDown: Function;
}
interface State {
  flag: boolean;
}
export default class Sortord extends React.Component<Props, State> {
  state: State = { flag: false };
  handleSort = () => {
    const { flag } = this.state;
    this.setState({ flag: !flag }, function (this: any) {
      if (this.state.flag) {
        this.props.sortUp();
      } else {
        this.props.sortDown();
      }
    });
  };
  render() {
    return (
      <div className="footer-sort">
        <button className="btn btn-info" onClick={this.handleSort}>
          <img src={Sort_img} alt="sort" />
        </button>
      </div>
    );
  }
}
