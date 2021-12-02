import * as React from "react";
import "./index.css";
import Jump_img from "./img/jump.png";
interface Props {
  jumpPage: Function;
  totalPage: number;
}
export default class Jump extends React.Component<Props> {
  input: any = React.createRef();
  handleJump = () => {
    const page: any = this.input.current.value;
    if (page > this.props.totalPage) {
      this.input.current.value = this.props.totalPage;
      this.props.jumpPage(this.props.totalPage);
    } else if (page > 0) {
      this.props.jumpPage(parseInt(page));
    } else {
      this.input.current.value = 1;
      this.props.jumpPage(1);
    }
  };
  render() {
    return (
      <div className="footer-jump">
        <span>跳转到: </span>
        <input type="number" className="footer-jump-input" ref={this.input} />
        <button className="btn btn-info" onClick={this.handleJump}>
          <img src={Jump_img} alt="jump" />
        </button>
      </div>
    );
  }
}
