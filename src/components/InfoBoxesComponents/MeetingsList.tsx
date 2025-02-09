import MeetingEntry from "./MeetingEntry.tsx";
import "./MeetingsList.scss";

const MeetingsList = () => {
  return (
    <>
      <div className="meetings-list">
        <MeetingEntry
          title="Spotkanie organizacyjne"
          date="6 listopada 2024"
          agendaItems={[
            "Zapoznanie zespołu z opiekunem",
            "Przedstawienie wstępnych propozycji tematu projektu",
          ]}
        />
        <MeetingEntry
          title="Rozważania nad tematem projektu"
          date="13 listopada 2024"
          agendaItems={[
            "Analiza pomysłów na projekt",
            "Rozważania nad rozbudową potencjalnych wyborów",
          ]}
        />
        <MeetingEntry
          title="Ostateczny wybór tematu projektu"
          date="27 listopada 2024"
          agendaItems={[
            "Rozważenie dodatkowych funkcjonalności",
            "Omówienie potencjalnych technologii, które można wykorzystać",
          ]}
        />
        <MeetingEntry
          title="Podział obowiązków"
          date="11 grudnia 2024"
          agendaItems={[
            "Podział obowiązków w zespole",
            "Przygotowanie wstępnego projektu UI",
          ]}
        />
        <MeetingEntry
          title="Omówienie postępów"
          date="8 stycznia 2025"
          agendaItems={[
            "Omówienie postępów w pracy",
            "Początek pracy nad user flow",
          ]}
        />
        <MeetingEntry
          title="Omówienie postępów"
          date="22 stycznia 2025"
          agendaItems={["Szkolenie z narzędzia Figma"]}
        />
      </div>
    </>
  );
};

export default MeetingsList;
