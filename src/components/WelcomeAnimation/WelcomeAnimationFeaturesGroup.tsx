import {ReactNode} from "react";
import "./WelcomeAnimationFeaturesGroup.scss";

interface WelcomeAnimationFeaturesGroupProps {
    children: ReactNode;
}

const WelcomeAnimationFeaturesGroup = ({children}: WelcomeAnimationFeaturesGroupProps) => {
    return <div className="welcome-animation__feature_group">
        {children}
    </div>;
}
export default WelcomeAnimationFeaturesGroup;