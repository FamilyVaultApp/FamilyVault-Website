import "../InfoBoxes/TeamMembers.css";

const Team = () => {
    return (
        <>
            <div className="row team-members">
                <div className="col team-member">
                    <b>Błażej Zyglarski</b> <br/>
                    <i>Opiekun projektu</i>
                </div>
            </div>
            <div className="row team-members">
                <div className=" team-member">
                    <b>Jakub Pawłowski</b>
                    <i>Kierownik projektu</i>
                </div>
                <div className=" team-member">
                    <b>Adam Cedro</b>
                    <i>Programista</i>
                </div>
                <div className=" team-member">
                    <b>Sajmon Koniec</b>
                    <i>Programista</i>
                </div>
                <div className=" team-member">
                    <b>Filip Stefański</b>
                    <i>Programista</i>
                </div>
                <div className=" team-member">
                    <b>Bartłomiej Wiśniewski</b>
                    <i>Sekretarz projektu</i>
                </div>
            </div>
        </>
    );
};

export default Team;
