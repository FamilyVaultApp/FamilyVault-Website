import AnimatedHighlightedText from "../AnimatedHighlightedText.tsx";
import Section from "./Section.tsx";
import "./MottoSection.scss"

const MottoSection = () => {
    return <Section>
        <div className="motto-section">
            <h1 className="motto-section">
                Ponieważ <b>każda rodzina</b> zasługuje na <AnimatedHighlightedText>pełną prywatność i
                bezpieczeństwo</AnimatedHighlightedText> w Internecie.
            </h1>
        </div>
    </Section>;
}

export default MottoSection;