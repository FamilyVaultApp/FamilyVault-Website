import SectionWithPhoto from "./SectionWithPhoto.tsx";
import tasksGifSrc from "../../assets/tasks.gif"
import HeaderWithDescription from "../HeaderWithDescription.tsx";
import {ClipboardTaskRegular} from "@fluentui/react-icons";

const TasksSection = () => {
    return <SectionWithPhoto photo={tasksGifSrc} reversed={true}>
        <HeaderWithDescription title={"Lista zadań"} icon={<ClipboardTaskRegular/>}>
            <p>
                Lista zadań w naszej aplikacji pozwala na <b>łatwe przypisywanie zadań</b> do różnych członków rodziny, co
                umożliwia skuteczne <b>zarządzanie obowiązkami</b>.
            </p>
            <p>
                Każde zadanie możesz przypisać <b>konkretnej osobie</b>, i <b>dodać szczegóły</b>, aby wszystko było jasne.
            </p>
            <p>
                To idealne narzędzie do uporządkowania <b>codziennych obowiązków</b> i organizacji <b>wspólnego czasu</b>. Wszystko
                dodatkowo szyfrowane <b>E2EE</b>.
            </p>
        </HeaderWithDescription>
    </SectionWithPhoto>
}

export default TasksSection;