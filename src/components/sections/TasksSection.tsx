import SectionWithPhoto from "./SectionWithPhoto.tsx";
import tasksGifSrc from "../../assets/tasks.gif";
import HeaderWithDescription from "../HeaderWithDescription.tsx";
import { ClipboardTaskRegular } from "@fluentui/react-icons";

const TasksSection = () => {
    return <SectionWithPhoto photo={tasksGifSrc} reversed={true}>
        <HeaderWithDescription title={"Lista zadań"} icon={<ClipboardTaskRegular />}>
            <p>
                Lista zadań w naszej aplikacji pozwala na <b>łatwe przypisywanie zadań</b> do różnych członków rodziny,
                co wspiera skuteczne <b>zarządzanie domowymi obowiązkami</b>.
            </p>
            <p>
                Każde zadanie możesz przypisać <b>konkretnej osobie</b> i <b>dodać szczegóły</b>, aby wszystko było
                jasne.
            </p>
            <p>
                To idealne narzędzie, które wspomaga organizację domowych obowiązków, bez obciążania uwagi użytkowników
                przez zbędną grywalizację czy angażujące powiadomienia.
            </p>
            <p>
                Wszystkie ważne sprawy Twojej rodziny pozostają tylko Wasze – dzięki szyfrowaniu E2E nikt z zewnątrz nie
                ma do nich dostępu.
            </p>
        </HeaderWithDescription>
    </SectionWithPhoto>;
};

export default TasksSection;