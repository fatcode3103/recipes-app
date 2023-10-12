import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Review.module.scss";
import AccountWrapper from "../../../components/AccountWrapper";

const cx = classNames.bind(styles);

function Review() {
    return (
        <div>
            <AccountWrapper>
                <h1>Reviewee</h1>
            </AccountWrapper>
        </div>
    );
}

export default Review;
