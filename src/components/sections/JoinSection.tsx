import SectionWithPhoto from "./SectionWithPhoto.tsx";
import joinGifSrc from "../../assets/join.gif";
import HeaderWithDescription from "../HeaderWithDescription.tsx";
import { CommunicationPersonRegular } from "@fluentui/react-icons";

const JoinSection = () => {
    return <SectionWithPhoto photo={joinGifSrc} reversed={true}>
        <HeaderWithDescription
            icon={<CommunicationPersonRegular />}
            title="Bezpieczne dodawanie">
            <p>
                W aplikacji FamilyVault <b>bezpieczeństwo jest dla nas priorytetem</b> zwłaszcza przy dodawaniu
                nowych członków do grupy rodzinnej. Zadbaliśmy o to, by cały proces był <b>prosty</b>, <b>szybki</b> i
                jednocześnie
                <b>maksymalnie bezpieczny</b>.
            </p>

            <p>
                Możesz dodać bliską osobę przez <b>zbliżenie telefonów</b> (NFC) lub skanowanie <b>kodu QR</b>. Obie
                metody wymagają fizycznej obecności drugiej osoby, co daje ci pewność, że dodajesz <b>dokładnie tę
                osobę,którą masz przed sobą</b>.
            </p>
        </HeaderWithDescription>
    </SectionWithPhoto>;
};

export default JoinSection;