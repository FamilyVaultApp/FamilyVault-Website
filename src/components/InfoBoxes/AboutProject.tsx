import React from "react";
import "../InfoBox.css";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <>
      <br />
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <div className="infobox-title">O aplikacji</div>
          <br />
          <div className="infobox-content about-project">
            FamilyConnector to aplikacja rodzinna, która wykorzystuje
            zaawansowane szyfrowanie End-to-End (E2E) przy użyciu biblioteki
            PrivMX. Jej głównym celem jest zapewnienie rodzinom sposobu na
            kontakt na odległość, bezpiecznego miejsca na przechowywanie ważnych
            dokumentów, jak również przekazywaniu informacji o obowiązkach do
            wykonania. Aplikacja jest zaprojektowana z myślą o prostocie
            obsługi, aby była intuicyjna zarówno dla dzieci, jak i seniorów.
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default AboutProject;
