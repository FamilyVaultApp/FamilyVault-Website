import Section from "./Section.tsx";
import "./DocumentationSection.scss";

const DocumentationSection = () => {
    return <Section>
        <div className="documentation-section">
            <div className="documentation-section-title">
                <h1>Dokumentacja</h1>
                <p>Szczegóły techniczne naszego projektu, w tym informacje o tym, jak uruchomić własną instancję serwera
                    FamilyVault, znajdziesz w naszej dokumentacji.</p>
            </div>
            <div className="documentation-section-link">
                {/* TODO: Dodaj link do dokumentacji */}
                <a href="/" className="disabled">Link do dokumentacji</a>
            </div>
        </div>
    </Section>;
};

export default DocumentationSection;