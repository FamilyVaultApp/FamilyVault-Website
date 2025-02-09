import React, { ReactNode } from "react";

interface DocumentIcon {
  featureIcon: ReactNode;
}

const Raports = ({ featureIcon }: DocumentIcon) => {
  return (
    <>
      <div className="row team-members">
        <div className="col team-member">
          <b>Raport zespołu</b> <br />
          <a href="/raports/raport_zespolu.pdf" download>
            {featureIcon}
          </a>
        </div>
      </div>
      <div className="team-members">
        <div className="row team-member">
          <b>Jakub Pawłowski</b>
          <a href="/raports/raport_jp.pdf" download>
            {featureIcon}
          </a>
        </div>
        <div className="row team-member">
          <b>Adam Cedro</b>
          <a href="/raports/raport_ac.pdf" download>
            {featureIcon}
          </a>
        </div>
        <div className="row team-member">
          <b>Sajmon Koniec</b>
          <a href="/raports/raport_sk.pdf" download>
            {featureIcon}
          </a>
        </div>
        <div className="row team-member">
          <b>Filip Stefański</b>
          <a href="/raports/raport_fs.pdf" download>
            {featureIcon}
          </a>
        </div>
        <div className="row team-member">
          <b>Bartłomiej Wiśniewski</b>
          <a href="/raports/raport_bw.pdf" download>
            {featureIcon}
          </a>
        </div>
      </div>
    </>
  );
};

export default Raports;
