import { DocumentBulletListRegular } from "@fluentui/react-icons";
import InfoBoxHeader from "../InfoBoxHeader";
import Raports from "../InfoBoxesComponents/Raports";

const TermRaports = () => {
  return (
    <>
      <div className="infobox-border">
        <div className="infobox container-xxl bd-gutter rounded-2">
          <br />
          <InfoBoxHeader>Raporty semestralne</InfoBoxHeader>
          <br />
          <div className="infobox-content">
            <Raports
              featureIcon={<DocumentBulletListRegular color="black" />}
            />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default TermRaports;
