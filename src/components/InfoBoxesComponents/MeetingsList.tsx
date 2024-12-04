import MeetingEntry from "./MeetingEntry.tsx";
import "./MeetingsList.scss"

const MeetingsList = () => {
  return (
      <>
        <div className="meetings-list">
          <MeetingEntry
              title="Spotkanie organizacyjne"
              date="6 listopada 2024"
              agendaItems={[
                "Zapoznanie zespołu z opiekunem",
                "Przedstawienie wstępnych propozycji tematu projektu"
              ]}
          />
          <MeetingEntry
              title="Rozważania nad tematem projektu"
              date="13 listopada 2024"
              agendaItems={[
                "Analiza pomysłów na projekt",
                "Rozważania nad rozbudową potencjalnych wyborów"
              ]}
          />
          <MeetingEntry
              title="Ostateczny wybór tematu projektu"
              date="27 listopada 2024"
              agendaItems={[
                "Rozważenie dodatkowych funkcjonalności",
                "Omówienie potencjalnych technologii, które można wykorzystać"
              ]}
          />
        </div>
      </>
  );
};

export default MeetingsList;
