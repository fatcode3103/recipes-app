import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./ChangePassword.module.scss";
import AccountWrapper from "../../../components/AccountWrapper";

const cx = classNames.bind(styles);

function ChangePassword() {
    return (
        <div>
            <AccountWrapper>
                <h1>ChangePasswordee</h1>
            </AccountWrapper>
        </div>
    );
}

export default ChangePassword;
