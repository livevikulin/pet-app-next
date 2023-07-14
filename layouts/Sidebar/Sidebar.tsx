import styles from "./Sidebar.module.css";
import { FunctionComponent } from "react";
import { ISidebarProps } from "./Sidebar.props";

export const Sidebar: FunctionComponent<ISidebarProps> = ({ ...props }) => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}
