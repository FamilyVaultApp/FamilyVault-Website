import React from "react";
import "../InfoBoxes/TeamMembers.css";
const Team = () => {
  return (
    <>
      <div className="row team-members">
        <div className="col team-member"></div>
        <div className="col team-member">
          <b>Błażej Zyglarski</b> <br />
          <i>Opiekun projektu</i>
        </div>
        <div className="col team-member"></div>
      </div>
      <br />
      <div className="row team-members">
        <div className="col team-member">
          <b>Jakub Pawłowski</b> <br />
          <i>Kierownik projektu</i>
        </div>
        <div className="col team-member">
          <b>Adam Cedro</b> <br />
          <i>Programista</i>
        </div>
        <div className="col team-member">
          <b>Sajmon Koniec</b> <br />
          <i>Programista</i>
        </div>
        <div className="col team-member">
          <b>Filip Stefański</b> <br />
          <i>Programista</i>
        </div>
        <div className="col team-member">
          <b>Bartłomiej Wiśniewski</b> <br />
          <i>Sekretarz projektu</i>
        </div>
      </div>
    </>
  );
};

export default Team;
