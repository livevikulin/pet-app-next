import styles from "./Footer.module.css";
import { FunctionComponent } from "react";
import { IFooterProps } from "./Footer.props";

export const Footer: FunctionComponent<IFooterProps> = ({ ...props }) => {
    return (
        <div {...props}>
            Footer
        </div>
    )
}
