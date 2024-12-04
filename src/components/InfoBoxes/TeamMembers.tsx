import "../InfoBox.css";
import "./TeamMembers.css";
import Team from "../InfoBoxesComponents/Team";
import zdjecie from "/placeholder.jpg";

const TeamMembers = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <br />
          <div className="infobox-title">Zespół nr 1</div>
          <br />
          <div className="team-img">
            <img
              src={zdjecie}
              className="infobox-img"
              alt="Zdjęcie zespołu"
            ></img>
          </div>
          <br />
          <Team />
          <br />
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
