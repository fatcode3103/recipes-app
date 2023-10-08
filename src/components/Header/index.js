import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";
import { menuHeader } from "../MenuData/MenuHeader";
import images from "../../assets/images";
import Image from "../Image";
import { PATH } from "../../utils/constant";

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    return (
        <div className={cx("header-container")}>
            <div className={cx("header-content")}>
                <Image
                    src={images.logoSvg}
                    className={cx("header-logo")}
                    onClick={() => navigate(PATH.HOME)}
                />
                <div className={cx("header-menu-list")}>
                    {menuHeader.map((item, index) => {
                        return (
                            <span
                                className={cx("header-menu-item")}
                                key={index}
                            >
                                {item.title}
                            </span>
                        );
                    })}
                </div>
                <div className={cx("account-wrapper")}>
                    <span>My account</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
