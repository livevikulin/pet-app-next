import styles from "./Footer.module.css";
import { FunctionComponent } from "react";
import { IFooterProps } from "./Footer.props";
import classnames from 'classnames'
import { format } from "date-fns";

export const Footer: FunctionComponent<IFooterProps> = ({ className, ...props }) => {
    return (
        <footer
          className={classnames(className, styles.footer)}
          {...props}
        >
            <div>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href='#' target="_blank">Пользовательское соглашение</a>
            <a href='#' target="_blank">Политика конфиденциальности</a>
        </footer>
    )
}
