import AboutProject from "./components/InfoBoxes/AboutProject";
import Meetings from "./components/InfoBoxes/Meetings";
import TeamMembers from "./components/InfoBoxes/TeamMembers";
import Timetable from "./components/InfoBoxes/Timetable";
import "bootstrap/dist/css/bootstrap.css";
import WelcomeAnimation from "./components/WelcomeAnimation/WelcomeAnimation.tsx";

function App() {
    return (
        <>
            <WelcomeAnimation/>
            <AboutProject/>
            <TeamMembers/>
            <Meetings/>
            <Timetable/>
        </>
    );
}

export default App;
