import "./TeamPhotoSection.scss"
import teamPhotoImgSrc from "../../assets/team_photo.jpg"
import Section from "./Section.tsx";
import AnimatedHighlightedText from "../AnimatedHighlightedText.tsx";
import TeamMembers from "../TeamMembers.tsx"
import {TeamMemberModel} from "../../models/TeamMemberModel.ts";

const teamMembers: TeamMemberModel[] = [
    {
        fullName: "Błażej Zyglarski",
        role: "Opiekun projektu"
    },
    {
        fullName: "Adam Cedro",
        role: "Programista"
    },
    {
        fullName: "Jakub Pawłowski",
        role: "Kierownik projektu"
    },
    {
        fullName: "Filip Stefański",
        role: "Programista"
    },
    {
        fullName: "Bartłomiej Wiśniewski",
        role: "Sekretarz projektu"
    },
    {
        fullName: "Sajmon Koniec",
        role: "Programista"
    },
]

const TeamPhotoSection = () => {
    return <Section>
        <div className="team-photo-section">
            <h1>Poznaj <AnimatedHighlightedText>Zespół nr 1</AnimatedHighlightedText></h1>
            <img className="team-photo" src={teamPhotoImgSrc} alt="FamilyVault Team"/>
            <TeamMembers members={teamMembers}/>
        </div>
    </Section>
}

export default TeamPhotoSection;