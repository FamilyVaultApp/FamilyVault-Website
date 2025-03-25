import MeetingsList from "../InfoBoxesComponents/MeetingsList";
import InfoBoxHeader from "../InfoBoxHeader.tsx";

const Meetings = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <br />
          <InfoBoxHeader>Spotkania zespołu</InfoBoxHeader>
          <br />
          <div className="infobox-content">
            Spotkania zespołu odbywają się w poniedziałki w trybie dwutygodniowym w
            siedzibie firmy <b>Simplito</b> - opiekuna projektu. <br />
            <br />
          </div>
          <br />
          <MeetingsList />
          <br />
        </div>
      </div>
    </>
  );
};

export default Meetings;
