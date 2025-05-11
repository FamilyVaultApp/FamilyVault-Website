import Section from "./Section.tsx";
import {ReactNode} from "react";
import classNames from "classnames";
import "./SectionWithPhoto.scss"

interface ISectionWithPhotoProps {
    children: ReactNode,
    photo: string,
    reversed: boolean
}

const SectionWithPhoto = ({children, photo, reversed}: ISectionWithPhotoProps) => {
    return <Section>
        <div className={classNames("section_with_photo", {"reversed": reversed})}>
            <div className="section_description">
                {children}
            </div>
            <div className="section_photo">
                <img src={photo} alt="Zdjęcie"/>
            </div>
        </div>
    </Section>
}

export default SectionWithPhoto;