import {ReactNode} from "react"
import "./Section.scss"

interface SectionProps {
    children: ReactNode
}

const Section = ({children}: SectionProps) => {
    return <div className="section">{children}
    </div>
}

export default Section;