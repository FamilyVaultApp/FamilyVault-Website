import phoneImg from "../../../assets/phone.png";
import "./WelcomeAnimationPhone.scss"
import WelcomeAnimationPhoneSecurity from "./WelcomeAnimationPhoneSecurity.tsx";

const WelcomeAnimationPhone = () => {
    return <div className="welcome-animation__phone">
        <WelcomeAnimationPhoneSecurity />
        <img src={phoneImg} alt="Zdjęcie przedstawiające telefon" />
    </div>
}

export default WelcomeAnimationPhone;