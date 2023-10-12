import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Collections.module.scss";
import AccountWrapper from "../../../components/AccountWrapper";

const cx = classNames.bind(styles);

function Collections() {
    return (
        <div>
            <AccountWrapper>
                <h1>Collectionsee</h1>
            </AccountWrapper>
        </div>
    );
}

export default Collections;
