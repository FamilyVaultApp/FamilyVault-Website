import WorkTable from "../InfoBoxesComponents/WorkTable";
import InfoBoxHeader from "../InfoBoxHeader.tsx";

const Timetable = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <br />
          <InfoBoxHeader>Harmonogram pracy</InfoBoxHeader>
          <WorkTable />
          <br />
        </div>
      </div>
      <br />
    </>
  );
};

export default Timetable;
