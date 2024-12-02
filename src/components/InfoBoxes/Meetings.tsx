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
          <div className="meetings-list">
            <ul>
              <li>
                6 listopada 2024 - Spotkanie organizacyjne
                <ul>
                  <li>Zapoznanie zespołu z opiekunem</li>
                  <li>Przedstawienie wstępnych propozycji tematu projektu</li>
                </ul>
              </li>
              <br />
              <li>
                13 listopada 2024 - Rozważania nad tematem projektu
                <ul>
                  <li>Rezygnacja z niektórych pomysłów</li>
                  <li>Rozważania nad rozbudową potencjalnych wyborów</li>
                </ul>
              </li>
              <br />
              <li>
                27 listopada 2024 - Ostateczny wybór tematu projektu
                <ul>
                  <li>Rozważenie dodatkowych funkcjonalności</li>
                  <li>
                    Omówienie potencjalnych technologii, które można wykorzystać
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Meetings;
