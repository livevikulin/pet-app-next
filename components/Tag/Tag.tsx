import styles from "./Tag.module.css";
import classnames from "classnames";
import { FunctionComponent } from "react";
import { ITagProps } from "./Tag.props";

export const Tag: FunctionComponent<ITagProps> = ({ size="m",  children, href, color="ghost", className, ...props}) => {
    return (
        <div
            className={classnames(styles.tag, className, {
                [styles.m]: size === "m",
                [styles.l]: size === "l",
                [styles.ghost]: color === "ghost",
                [styles.red]: color === "red",
                [styles.gray]: color === "gray",
                [styles.green]: color === "green",
                [styles.primary]: color === "primary",
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
}