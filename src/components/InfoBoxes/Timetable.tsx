import WorkTable from "../InfoBoxesComponents/WorkTable";
import "./Meetings.css";
const Timetable = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <div className="infobox-title">Harmonogram pracy</div>
          <div className="meetings-list-title">
            Planowany harmonogram pracy nad projektem:
          </div>
          <WorkTable />
          <br />
        </div>
      </div>
      <br />
    </>
  );
};

export default Timetable;
