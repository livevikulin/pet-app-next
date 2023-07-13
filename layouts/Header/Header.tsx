import styles from "./Header.module.css";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./Header.props";

export const Header: FunctionComponent<IHeaderProps> = ({ ...props }) => {
    return (
        <div {...props}>
            Header
        </div>
    )
}
