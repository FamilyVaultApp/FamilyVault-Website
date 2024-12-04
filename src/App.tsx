import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
import WelcomeAnimation from "./components/WelcomeAnimation/WelcomeAnimation.tsx";
import ProjectInfo from "./components/ProjectInfo.tsx";

function App() {
    return (
        <>
            <WelcomeAnimation/>
            <ProjectInfo />
        </>

    );
}

export default App;
