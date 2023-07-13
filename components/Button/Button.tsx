import styles from "./Button.module.css";
import classnames from "classnames";
import { FunctionComponent } from "react";
import { IButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";

export const Button: FunctionComponent<IButtonProps> = ({ appearance, children, arrow="none", className, ...props }) => {
    return (
        <button className={classnames(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <span className={classnames(styles.arrow, {
                    [styles.down]: arrow === "down",
                })}>
                    <ArrowIcon />
                </span>
            )}
        </button>
    )
}