import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="hstack gap-15 topbar container-xxl bd-gutter sticky-top">
          <div className="p-2 item">
            <b>
              <NavLink to="/" className="link">
                Family Connector
              </NavLink>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
