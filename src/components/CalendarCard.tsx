import {ReactNode} from "react";
import "./CalendarCard.scss"

interface CalendarCardProps {
    month: string,
    day: string,
    description: ReactNode
}

const CalendarCard = ({month, day, description}: CalendarCardProps) => {
    return <div className="calendar-card">
        <p className="calendar-card-month">{month}</p>
        <p className="calendar-card-day">{day}</p>
        <div className="calendar-card-description">
            {description}
        </div>
    </div>
}

export default CalendarCard;