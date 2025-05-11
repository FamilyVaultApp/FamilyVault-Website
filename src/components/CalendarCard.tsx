import {ReactNode} from "react";
import "./CalendarCard.scss"

interface CalendarCardProps {
    month: string,
    day: string,
    description: ReactNode
}

const CalendarCard = ({month, day, description}: CalendarCardProps) => {
    return <div className="calendar_card">
        <p className="calendar_card__month">{month}</p>
        <p className="calendar_card__day">{day}</p>
        <div className="calendar_card__description">
            {description}
        </div>
    </div>
}

export default CalendarCard;