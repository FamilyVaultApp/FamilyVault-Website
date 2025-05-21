import AnimatedHighlightedText from "../AnimatedHighlightedText.tsx";
import Section from "./Section.tsx";
import "./MottoSection.scss";

const MottoSection = () => {
    return (
        <Section>
            <div className="motto-section">
                <h1 className="motto-section">
                    Ponieważ <b>każda rodzina</b> zasługuje na <AnimatedHighlightedText>prywatny i bezpieczny</AnimatedHighlightedText>komunikator.
                </h1>
                <div className="motto-about">
                    <p>
                        FamilyVault wspiera codzienną komunikację, <b>chroniąc Wasze rozmowy</b> i <b>rodzinne
                        sprawy</b>. Ta <b>bezpieczna alternatywa</b> do popularnych komunikatorów zawiera tylko
                        niezbędne funkcje, jak czat, wiadomości głosowe, wysyłanie zdjęć i lista zadań - <b>bez
                        rozpraszania, śledzenia i reklam</b>.
                    </p>
                    <div className="motto-about--elements">
                        <ul>
                            <li>odpowiednie dla dzieci nawet poniżej 13 lat</li>
                            <li>non-profit</li>
                            <li>open-source</li>
                            <li>private-by-default</li>
                            <li>wszystkie dane chronione E2EE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MottoSection;
