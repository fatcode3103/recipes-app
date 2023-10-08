import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx("header")}>Header</div>
            {children}
        </div>
    );
}

export default DefaultLayout;
