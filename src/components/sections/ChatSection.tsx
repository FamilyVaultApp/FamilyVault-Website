import SectionWithPhoto from "./SectionWithPhoto.tsx";
import chatGifSrc from "../../assets/chat.gif"
import HeaderWithDescription from "../HeaderWithDescription.tsx";
import {ChatRegular} from "@fluentui/react-icons";

const ChatSection = () => {
    return <SectionWithPhoto photo={chatGifSrc} reversed={false}>
        <HeaderWithDescription title="Szyfrowane rozmowy" icon={<ChatRegular/>}>
            <p>
                Wymiana informacji między członkami rodziny powinna być <b>prosta</b> i <b>bezpieczna</b>. W naszej
                aplikacji umożliwiamy wysyłanie zdjęć, wiadomości głosowych oraz tekstowych.
            </p>

            <p>
                Wszystko jest szyfrowane za pomocą <b>zaawansowanych metod kryptograficznych</b>, dzięki czemu masz
                pewność, że tylko osoby, które są w Twoim czacie, będą mogły odczytać wysłane treści.
            </p>
        </HeaderWithDescription>
    </SectionWithPhoto>
}

export default ChatSection;