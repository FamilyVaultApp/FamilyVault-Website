import React from "react";
import "../InfoBoxes/Meetings.css";
const MeetingsList = () => {
  return (
    <>
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
    </>
  );
};

export default MeetingsList;
