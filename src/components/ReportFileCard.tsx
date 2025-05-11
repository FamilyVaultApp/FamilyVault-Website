import { ReportFileModel } from "../models/ReportFileModel.ts";
import { DocumentPdfRegular } from "@fluentui/react-icons";
import "./ReportFileCard.scss";

interface ReportFileCardProps {
    file: ReportFileModel;
}

const ReportFileCard = ({ file }: ReportFileCardProps) => {
    return <a href={file.link} target="_blank" rel="noopener noreferrer">
        <div className="report-file-card">
            <div className="report-file-card-icon"><DocumentPdfRegular /></div>
            <div className="report-file-card-title">{file.title}</div>
            <div className="report-file-card-author">{file.author}</div>
        </div>
    </a>;
};

export default ReportFileCard;