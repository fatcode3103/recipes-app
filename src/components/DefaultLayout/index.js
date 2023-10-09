import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./DefaultLayout.module.scss";
import Header from "../Header";
import Footer from "../Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("default-layout-container")}>
            <div className={cx("header")}>
                <Header />
            </div>
            {children}
            <div className={cx("footer")}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
