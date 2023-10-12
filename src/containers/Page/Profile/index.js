import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Profile.module.scss";
import AccountWrapper from "../../../components/AccountWrapper";

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div>
            <AccountWrapper>
                <h1>profileee</h1>
            </AccountWrapper>
        </div>
    );
}

export default Profile;
