import styles from "./Layout.module.css";
import { FunctionComponent, ReactElement } from "react";
import { ILayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.main}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): ReactElement {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    }
}
