import "./WelcomeAnimationPhoneSecurity.scss";
import { LockShieldRegular} from "@fluentui/react-icons";

const WelcomeAnimationPhoneSecurity = () => {
    return <div className="welcome-animation__phone__security">
        <LockShieldRegular />
        <p>E2EE</p>
    </div>
}

export default WelcomeAnimationPhoneSecurity;