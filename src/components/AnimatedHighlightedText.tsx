import { ReactNode, useEffect, useRef, useState } from "react";
import "./AnimatedHighlightedText.scss";
import classNames from "classnames";

interface AnimatedHighlightedTextProps {
    children: ReactNode;
}

const AnimatedHighlightedText = ({ children }: AnimatedHighlightedTextProps) => {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return <span ref={ref} className={classNames("highlighted", { "is-visible": isVisible })}>{children}</span>;
};

export default AnimatedHighlightedText;