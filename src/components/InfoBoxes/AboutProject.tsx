import "../InfoBox.css";
import "./AboutProject.css";
import InfoBoxHeader from "../InfoBoxHeader.tsx";

const AboutProject = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <InfoBoxHeader>O aplikacji</InfoBoxHeader>
          <div className="infobox-content about-project">
            FamilyConnector to mobilna aplikacja stworzona z myślą o rodzinach.
            Oferuje funkcje ułatwiające codzienne życie, takie jak: <br />
            - bezpieczna komunikacja między członkami rodziny, <br />
            - przechowywanie ważnych dokumentów w jednym miejscu, <br />
            - tworzenie list zakupów dostępnych dla wszystkich, <br />
            - i wiele więcej. <br />
            Dzięki zastosowaniu szyfrowania End-to-End (E2E) opartego na bibliotece PrivMX by Simplito, użytkownicy mogą mieć pewność, że ich dane są w pełni chronione.
            Prosta i intuicyjna obsługa sprawia, że aplikacja jest przyjazna zarówno dla dzieci, jak i dorosłych.
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default AboutProject;
