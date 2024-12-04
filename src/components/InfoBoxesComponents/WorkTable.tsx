import "../InfoBoxes/Meetings.css";

const WorkTable = () => {
  return (
    <>
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
    </>
  );
};

export default WorkTable;
