import React from "react";
import "../InfoBox.css";
import "./TeamMembers.css";

const TeamMembers = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <br />
          <div className="infobox-title">Zespół nr 1</div>
          <div className="infobox-img">
            <img src="/placeholder.jpg"></img>
          </div>
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
            <div className="col"></div>
            <div className="col team-member">
              <b>Adam Cedro</b> <br />
              <i>Programista</i>
            </div>
            <div className="col"></div>
            <div className="col team-member">
              <b>Sajmon Koniec</b> <br />
              <i>Programista</i>
            </div>
            <div className="col"></div>
            <div className="col team-member">
              <b>Filip Stefański</b> <br />
              <i>Programista</i>
            </div>
            <div className="col"></div>
            <div className="col team-member">
              <b>Bartłomiej Wiśniewski</b> <br />
              <i>Sekretarz projektu</i>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
