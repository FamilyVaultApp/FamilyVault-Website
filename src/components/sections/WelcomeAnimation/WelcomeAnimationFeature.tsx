import { ReactNode } from "react";
import "./WelcomeAnimationFeature.scss";

interface WelcomeAnimationFeature {
    featureIcon: ReactNode;
}

const WelcomeAnimationFeature = ({ featureIcon }: WelcomeAnimationFeature) => {
    return <div className="welcome-animation__feature_group__feature">
        {featureIcon}
    </div>;
};
export default WelcomeAnimationFeature;