import {PersonRegular} from "@fluentui/react-icons";
import "./TeamMembers.scss"

interface TeamMemberProps {
    members: TeamMember[];
}

const TeamMembers = ({members}: TeamMemberProps) => {
    return <div className="team_members">
        {members.map((member) =>
            <div className="team_member" key={member.fullName}>
                <PersonRegular/>
                <h4>{member.fullName}</h4>
                <p>{member.role}</p>
            </div>
        )}
    </div>
}

export default TeamMembers;