import { FunctionComponent, ReactElement } from "react";
import { ILayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer />
        </>
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
