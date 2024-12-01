import "./Meetings.css";
const Timetable = () => {
  return (
    <>
      <br />
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <div className="infobox-title">Harmonogram pracy</div>
          <div className="meetings-list-title">
            Planowany harmonogram pracy nad projektem:
          </div>
          <div className="meetings-list">
            <ul>
              <li>
                Listopad
                <ul>
                  <li>Zapoznanie zespołu z opiekunem</li>
                  <li>Wybór tematu projektu</li>
                </ul>
              </li>
              <br />
              <li>
                Grudzień
                <ul>
                  <li>
                    Zapoznanie z narzędziami potrzebnymi do stworzenia projektu
                  </li>
                  <li>Rozważania nad funkcjonalnością projektu</li>
                </ul>
              </li>
              <br />
              <li>
                Styczeń
                <ul>
                  <li>Początek praktycznej budowy projektu</li>
                </ul>
              </li>
              <br />
              <li>
                Luty
                <ul>
                  <li>Praca nad implementacją projektu</li>
                </ul>
              </li>
              <br />
              <li>
                Marzec
                <ul>
                  <li>Praca nad implementacją projektu</li>
                </ul>
              </li>
              <br />
              <li>
                Kwiecień
                <ul>
                  <li>Praca nad implementacją projektu</li>
                </ul>
              </li>
              <br />
              <li>
                Maj
                <ul>
                  <li>Przygotowanie prezentacji projektu</li>
                  <li>Ostateczne poprawki</li>
                  <li>Prezentacja projektu</li>
                </ul>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </div>
      <br />
    </>
  );
};

export default Timetable;
