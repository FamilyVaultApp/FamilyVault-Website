import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import WelcomeAnimation from "./components/sections/WelcomeAnimation/WelcomeAnimation";
import MottoSection from "./components/sections/MottoSection.tsx";
import JoinSection from "./components/sections/JoinSection.tsx";
import ChatSection from "./components/sections/ChatSection.tsx";
import TasksSection from "./components/sections/TasksSection.tsx";
import TeamPhotoSection from "./components/sections/TeamPhotoSection.tsx";
import MeetingsSection from "./components/sections/MeetingsSection.tsx";
import ScheduleSection from "./components/sections/ScheduleSection.tsx";
import ReportsSection from "./components/sections/ReportsSection.tsx";
import DocumentationSection from "./components/sections/DocumentationSection.tsx";

function App() {
    return (
        <>
            <WelcomeAnimation />
            <MottoSection />
            <div className="app-info-sections">
                <JoinSection />
                <ChatSection />
                <TasksSection />
            </div>
            <DocumentationSection />
            <TeamPhotoSection />
            <MeetingsSection />
            <ScheduleSection />
            <ReportsSection />
        </>
    );
}

export default App;
