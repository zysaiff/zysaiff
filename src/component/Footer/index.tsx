import * as React from "react";
import Sortord from "../Sortord";
import Jump from "../Jump";
import ChangePage from "../ChangePage";
import "./index.css";

interface Props {
  pageSize: number;
  totalPage: number;
  pagenum: number;
  setUp: Function;
  setDown: Function;
  jumpPage: Function;
  sortUp: Function;
  sortDown: Function;
}
export default class Footer extends React.Component<Props> {
  render() {
    const {
      pageSize,
      totalPage,
      pagenum,
      setUp,
      setDown,
      jumpPage,
      sortUp,
      sortDown,
    } = this.props;
    return (
      <div className="footer-into">
        <div className="row">
          <div className="col-sm-3">
            <Sortord sortUp={sortUp} sortDown={sortDown} />
          </div>
          <div className="col-sm-2 col-sm-offset-5">
            <Jump jumpPage={jumpPage} totalPage={totalPage} />
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
