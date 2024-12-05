import MeetingEntry from "./MeetingEntry.tsx";

const WorkTable = () => {
  return (
      <>
        <div className="meetings-list">
          <MeetingEntry
              title="Listopad"
              agendaItems={["Zapoznanie zespołu z opiekunem", "Wybór tematu projektu"]}
          />
          <MeetingEntry
              title="Grudzień"
              agendaItems={[
                "Zapoznanie z narzędziami potrzebnymi do stworzenia projektu",
                "Rozważania nad funkcjonalnością projektu",
              ]}
          />
          <MeetingEntry
              title="Styczeń"
              agendaItems={["Początek praktycznej budowy projektu"]}
          />
          <MeetingEntry
              title="Luty"
              agendaItems={["Praca nad implementacją projektu"]}
          />
          <MeetingEntry
              title="Marzec"
              agendaItems={["Praca nad implementacją projektu"]}
          />
          <MeetingEntry
              title="Kwiecień"
              agendaItems={["Praca nad implementacją projektu"]}
          />
          <MeetingEntry
              title="Maj"
              agendaItems={[
                "Przygotowanie prezentacji projektu",
                "Ostateczne poprawki",
                "Prezentacja projektu",
              ]}
          />
        </div>
      </>
  );
};

export default WorkTable;
