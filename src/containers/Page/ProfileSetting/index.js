import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./ProfileSetting.module.scss";
import AccountWrapper from "../../../components/AccountWrapper";

const cx = classNames.bind(styles);

function ProfileSetting() {
    return (
        <div>
            <AccountWrapper>
                <h1>ProfileSettingee</h1>
            </AccountWrapper>
        </div>
    );
}

export default ProfileSetting;
