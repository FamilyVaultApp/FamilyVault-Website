import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="hstack gap-15 topbar container-xxl bd-gutter sticky-top">
          <div className="p-2 item">
            <a href="/" className="link">
              <b>Family Connector</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
