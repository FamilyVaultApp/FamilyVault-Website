import { ReactNode } from "react";
import "./ScheduleCard.scss";

interface ScheduleCardProps {
    title: string;
    description: ReactNode;
}

const ScheduleCard = ({ title, description }: ScheduleCardProps) => {
    return <div className="schedule-card">
        <h3>{title}</h3>
        <div className="description">
            {description}
        </div>
    </div>;
};

export default ScheduleCard;