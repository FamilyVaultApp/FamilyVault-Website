import MeetingsList from "../InfoBoxesComponents/MeetingsList";
import "./Meetings.css";
const Meetings = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <div className="infobox-title">Spotkania zespołu</div>
          <div className="infobox-content">
            Spotkania zespołu odbywają się w środy w trybie dwutygodniowym w
            siedzibie firmy <b>Simplito</b> - opiekuna projektu. <br />
            Dodatkowo w każdy poniedziałek zespół odbywa z opiekunem zdalną
            rozmowę, w celu omówienia bieżących problemów oraz pomysłów.
            <br />
          </div>
          <br />
          <div className="meetings-list-title">
            Obecny spis spotkań zespołu:
          </div>
          <MeetingsList />
          <br />
        </div>
      </div>
    </>
  );
};

export default Meetings;
