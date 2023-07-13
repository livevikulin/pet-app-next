import styles from "./Paragraph.module.css";
import classnames from "classnames";
import { FunctionComponent } from "react";
import { IParagraphProps } from "./Paragraph.props";

export const Paragraph: FunctionComponent<IParagraphProps> = ({ size, children, className, ...props }) => {
    return (
        <p
            className={classnames(styles.paragraph, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.l]: size === "l",
            })}
            {...props}
        >
            {children}
        </p>
    )
}