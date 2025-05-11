import Section from "./Section";
import "./ScheduleSection.scss";
import { ScheduleModel } from "../../models/ScheduleModel.ts";
import ScheduleCard from "../ScheduleCard.tsx";

const schedules: ScheduleModel[] = [
    {
        title: "Listopad",
        description: <>
            <p>Zapoznanie zespołu z opiekunem</p>
            <p>Wybór tematu projektu</p>
        </>
    },
    {
        title: "Grudzień",
        description: <>
            <p>Zapoznanie z narzędziami potrzebnymi do stworzenia projektu</p>
        </>
    },
    {
        title: "Styczeń",
        description: <>
            <p>Początek praktycznej budowy projektu</p>
        </>
    },
    {
        title: "Luty",
        description: <>
            <p>Praca nad implementacją projektu</p>
        </>
    },
    {
        title: "Marzec",
        description: <>
            <p>Praca nad implementacją projektu</p>
        </>
    },
    {
        title: "Kwiecień",
        description: <>
            <p>Praca nad implementacją projektu</p>
        </>
    },
    {
        title: "Maj",
        description: <>
            <p>Przygotowanie prezentacji projektu</p>
            <p>Ostateczne poprawki</p>
            <p>Prezentacja projektu</p>
        </>
    }
];


const ScheduleSection = () => {
    return <Section>
        <div className="schedule-section">
            <h1>Harmonogram pracy</h1>
            <div className="schedule-items">
                {
                    schedules.map((schedule: ScheduleModel) => (
                        <ScheduleCard title={schedule.title} description={schedule.description} />
                    ))
                }
            </div>
        </div>
    </Section>;
};

export default ScheduleSection;