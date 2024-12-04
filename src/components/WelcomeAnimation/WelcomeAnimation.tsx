import "./WelcomeAnimation.scss";
import {ChatFilled, DocumentFilled, ImageFilled, LocationFilled, PersonHeartFilled} from "@fluentui/react-icons";
import WelcomeAnimationFeature from "./WelcomeAnimationFeature.tsx";
import WelcomeAnimationFeaturesGroup from "./WelcomeAnimationFeaturesGroup.tsx";
import WelcomeAnimationPhone from "./WelcomeAnimationPhone.tsx";
import WelcomeAnimationAppName from "./WelcomeAnimationAppName.tsx";

const WelcomeAnimation = () => {
    return <section className="welcome-animation">
        <WelcomeAnimationPhone />
        <WelcomeAnimationAppName />
        <WelcomeAnimationFeaturesGroup>
            <WelcomeAnimationFeature featureIcon={<LocationFilled color="white"/>}/>
            <WelcomeAnimationFeature featureIcon={<ChatFilled color="white"/>}/>
            <WelcomeAnimationFeature featureIcon={<PersonHeartFilled color="white"/>}/>
            <WelcomeAnimationFeature featureIcon={<DocumentFilled color="white"/>}/>
            <WelcomeAnimationFeature featureIcon={<ImageFilled color="white"/>}/>
        </WelcomeAnimationFeaturesGroup>
    </section>
}

export default WelcomeAnimation;