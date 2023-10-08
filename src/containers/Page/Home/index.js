import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("home-container")}>
            <div className={cx("home-content")}>Home</div>
        </div>
    );
}

export default Home;
