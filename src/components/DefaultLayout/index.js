import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";
import Header from "../Header/HeaderDefault";
import Footer from "../Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("default-layout-container")}>
            <div className={cx("header")}>
                <Header />
            </div>
            <div className={cx("children")}>{children}</div>
            <div className={cx("footer")}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
