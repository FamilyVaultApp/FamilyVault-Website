import {ReactNode} from "react"
import "./HeaderWithDescription.scss"

interface HeaderWithDescriptionProps {
    children: ReactNode,
    icon?: ReactNode,
    title: string,
}

const HeaderWithDescription = ({icon, title, children}: HeaderWithDescriptionProps) => {
    return <div className="header-with-description">
        {icon}
        <h3>{title}</h3>
        <p>{children}</p>
    </div>
}

export default HeaderWithDescription