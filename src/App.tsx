import Footer from "./components/Footer";
import AboutProject from "./components/InfoBoxes/AboutProject";
import Meetings from "./components/InfoBoxes/Meetings";
import TeamMembers from "./components/InfoBoxes/TeamMembers";
import Timetable from "./components/InfoBoxes/Timetable";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <TopBar />
      <AboutProject />
      <TeamMembers />
      <Meetings />
      <Timetable />
      <Footer />
    </>
  );
}

export default App;
