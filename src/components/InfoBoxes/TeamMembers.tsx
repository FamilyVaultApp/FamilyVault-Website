import "../InfoBox.css";
import "./TeamMembers.css";
import Team from "../InfoBoxesComponents/Team";
import zdjecie from "/team_photo.jpg";
import InfoBoxHeader from "../InfoBoxHeader.tsx";

const TeamMembers = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <br />
          <InfoBoxHeader>Zespół nr 1</InfoBoxHeader>
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
