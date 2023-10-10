import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";
import { menuHeader } from "../../MenuData/MenuHeader";
import images from "../../../assets/images";
import Image from "../../Image";
import { PATH } from "../../../utils/constant";
import {
    faCaretDown,
    faClose,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    const [isShowSearchBar, setIsShowSearchBar] = useState(false);

    const handleShowSearchBar = () => {
        setIsShowSearchBar(true);
    };

    const handleCloseSearchBar = () => {
        setIsShowSearchBar(false);
    };

    return (
        <div className={cx("header-container")}>
            <div className={cx("header-content")}>
                <Image
                    src={images.logoSvg}
                    className={cx("header-logo")}
                    onClick={() => navigate(PATH.HOME)}
                />
                {!isShowSearchBar && (
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
                )}
                {!isShowSearchBar && (
                    <div className={cx("account-wrapper")}>
                        <span
                            className={cx("search-icon")}
                            onClick={() => handleShowSearchBar()}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span className={cx("my-account")}>
                            My account
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                style={{ marginLeft: "4px" }}
                            />
                        </span>
                    </div>
                )}
                {isShowSearchBar && (
                    <div className={cx("search-bar-wrapper")}>
                        <span>Tìm kiếm</span>
                        <div className={cx("search-wrapper")}>
                            <input
                                type="text"
                                placeholder="Bạn đang tìm kiếm cái gì?"
                                onBlur={() => handleCloseSearchBar()}
                            />
                            <div className={cx("search-icon-box")}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div
                                className={cx("close-search-bar")}
                                onClick={() => handleCloseSearchBar()}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
