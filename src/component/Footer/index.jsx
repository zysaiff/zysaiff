import React, { Component } from "react";
import Sortord from "../Sortord";
import Jump from "../Jump";
import ChangePage from "../ChangePage";
import "./index.css";
export default class Footer extends Component {
  render() {
    const { pageSize, totalPage, pagenum, setUp, setDown, jumpPage, sortUp, sortDown} = this.props;
    return (
      <div className="footer-into">
        <div className="row">
          <div className="col-sm-3">
            <Sortord sortUp={sortUp} sortDown={sortDown}/>
          </div>
          <div className="col-sm-2 col-sm-offset-5">
            <Jump jumpPage={jumpPage} pagenum={pagenum} totalPage={totalPage}/>
          </div>
          <div className="col-sm-2">
            <ChangePage
              setUp={setUp}
              setDown={setDown}
              pagenum={pagenum}
              pageSize={pageSize}
              totalPage={totalPage}
            />
          </div>
        </div>
      </div>
    );
  }
}
