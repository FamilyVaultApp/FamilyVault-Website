import Section from "./Section.tsx";
import "./ReportsSection.scss";
import { ReportFileModel } from "../../models/ReportFileModel.ts";
import ReportFileCard from "../ReportFileCard.tsx";

const reports: ReportFileModel[] = [
    {
        title: "Raport zespołu",
        author: "",
        link: "raports/raport_zespolu.pdf"
    },
    {
        title: "Raport semestralny",
        author: "Jakub Pawłowski",
        link: "raports/raport_jp.pdf"
    },
    {
        title: "Raport semestralny",
        author: "Adam Cedro",
        link: "raports/raport_ac.pdf"
    },
    {
        title: "Raport semestralny",
        author: "Sajmon Koniec",
        link: "raports/raport_sk.pdf"
    },
    {
        title: "Raport semestralny",
        author: "Filip Stefański",
        link: "raports/raport_fs.pdf"
    },
    {
        title: "Raport semestralny",
        author: "Bartłomiej Wiśniewski",
        link: "raports/raport_bw.pdf"
    }
];


const ReportsSection = () => {
    return <Section>
        <div className="reports-section">
            <h1>Raporty semestralne</h1>
            <div className="reports">
                {
                    reports.map((reportFile) => (
                        <ReportFileCard file={reportFile} />
                    ))
                }
            </div>
        </div>
    </Section>;
};

export default ReportsSection;