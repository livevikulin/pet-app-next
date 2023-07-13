import styles from "./Sidebar.module.css";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./Header.props";

export const Sidebar: FunctionComponent<IHeaderProps> = ({ ...props }) => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}
