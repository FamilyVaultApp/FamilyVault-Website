import "./InfoBoxHeader.scss"
import {ReactNode} from "react";

interface InfoBoxHeaderProps {
    children: ReactNode;
}

const InfoBoxHeader = ({children}: InfoBoxHeaderProps) => {
    return (
        <h1 className="info-box-header">
            {children}
        </h1>
    );
};

export default InfoBoxHeader;