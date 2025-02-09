import "./ProjectInfo.scss";
import AboutProject from "./InfoBoxes/AboutProject.tsx";
import TeamMembers from "./InfoBoxes/TeamMembers.tsx";
import Meetings from "./InfoBoxes/Meetings.tsx";
import Timetable from "./InfoBoxes/Timetable.tsx";
import TermRaports from "./InfoBoxes/TermRaports.tsx";

const ProjectInfo = () => {
  return (
    <div className="project-info">
      <AboutProject />
      <TeamMembers />
      <Meetings />
      <Timetable />
      <TermRaports />
    </div>
  );
};

export default ProjectInfo;
