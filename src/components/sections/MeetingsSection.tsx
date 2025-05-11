import Section from "./Section.tsx";
import "./MeetingsSection.scss";
import CalendarCard from "../CalendarCard.tsx";
import { MeetingModel } from "../../models/MeetingModel.ts";

const meetings: MeetingModel[] = [
    {
        day: 6,
        month: "Listopad",
        description: (
            <>
                <p>
                    <b>Spotkanie organizacyjne</b>
                </p>
                <p>Zapoznanie zespołu z opiekunem</p>
                <p>Przedstawienie wstępnych propozycji tematu projektu</p>
            </>
        ),
    },
    {
        day: 13,
        month: "Listopada",
        description: (
            <>
                <p>
                    <b>Rozważania nad tematem projektu</b>
                </p>
                <p>Analiza pomysłów na projekt</p>
                <p>Rozważania nad rozbudową potencjalnych wyborów</p>
            </>
        ),
    },
    {
        day: 27,
        month: "Listopada",
        description: (
            <>
                <p>
                    <b>Ostateczny wybór tematu projektu</b>
                </p>
                <p>Rozważenie dodatkowych funkcjonalności</p>
                <p>
                    Omówienie potencjalnych technologii, które można wykorzystać
                </p>
                <p>Podział obowiązków</p>
            </>
        ),
    },
    {
        day: 11,
        month: "Grudnia",
        description: (
            <>
                <p>
                    <b>Podział obowiązków w zespole</b>
                </p>
                <p>Przygotowanie wstępnego projektu UI</p>
                <p>Omówienie postępów</p>
            </>
        ),
    },
    {
        day: 8,
        month: "Stycznia",
        description: (
            <>
                <p>
                    <b>Omówienie postępów w pracy</b>
                </p>
                <p>Początek pracy nad user flow</p>
                <p>Omówienie postępów</p>
            </>
        ),
    },
    {
        day: 22,
        month: "Stycznia",
        description: (
            <>
                <p>
                    <b>Szkolenie z narzędzia Figma</b>
                </p>
                <p>Omówienie postępów</p>
            </>
        ),
    },
    {
        day: 19,
        month: "Lutego",
        description: (
            <>
                <p>
                    <b>Przygotowanie ankiety dla grupy docelowej</b>
                </p>
                <p>Przedstawienie efektów pracy nad aplikacją</p>
                <p>Omówienie postępów</p>
            </>
        ),
    },
    {
        day: 10,
        month: "Marca",
        description: (
            <>
                <p>
                    <b>Przedstawienie efektów pracy nad aplikacją</b>
                </p>
                <p>Przedstawienie dalszego planu pracy</p>
                <p>Omówienie postępów</p>
            </>
        ),
    },
    {
        day: 24,
        month: "Marca",
        description: (
            <>
                <p>
                    <b>
                        Przedstawienie modułu dodawania nowych użytkowników w
                        aplikacji
                    </b>
                </p>
                <p>Omówienie dalszych planów rozwoju aplikacji</p>
            </>
        ),
    },
];

const MeetingsSection = () => {
    return (
        <Section>
            <div className="meetings-section">
                <div className="meetings-header">
                    <h1>Spotkania zespołu</h1>
                    <p>
                        Spotkania zespołu odbywają się w poniedziałki w trybie
                        dwutygodniowym w siedzibie firmy Simplito - opiekuna
                        projektu.
                    </p>
                </div>
                <div className="calendar-cards">
                    {meetings.map((meeting) => (
                        <CalendarCard
                            month={meeting.month}
                            day={meeting.day}
                            description={meeting.description}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MeetingsSection;
