import Section from "./Section.tsx";
import "./SourceCodeSection.scss";
import { CodeRegular } from "@fluentui/react-icons";

const SourceCodeSection = () => {
    return <Section>
        <div className="source-code-section">
            <div className="source-code-section-title">
                <h1>Kod źródłowy</h1>
                <p>Nasz projekt jest w pełni otwartoźródłowy. Możesz przeglądać kod, zgłaszać błędy, 
                    proponować ulepszenia lub nawet przyczynić się do rozwoju projektu FamilyVault.</p>
            </div>
            <div className="source-code-section-link">
                <a href="https://github.com/FamilyVaultApp" target="_blank" rel="noopener noreferrer">
                    <CodeRegular />
                    Repozytoria na GitHub
                </a>
            </div>
        </div>
    </Section>;
};

export default SourceCodeSection;
