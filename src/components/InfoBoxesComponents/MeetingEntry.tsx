import "./MeetingEntry.scss";
import {CalendarFilled} from "@fluentui/react-icons";

interface MeetingEntryProps {
    title: string,
    agendaItems: string[]
    date?: string,
}

const MeetingEntry = ({title, date, agendaItems}: MeetingEntryProps) => {
    return <div className="meeting-entry">
        <div className="meeting-entry__icon">
            <CalendarFilled />
        </div>
        <p className="meeting-entry__title">{title}</p>
        {date && <p className="meeting-entry__date">{date}</p>}
        <div className="meeting-entry__agenda_items">
            {agendaItems.map((agendaItem) => <p className="meeting-entry__agenda_items__item">{agendaItem}</p>)}
        </div>
    </div>
};

export default MeetingEntry;