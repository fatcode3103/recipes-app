import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";
import { menuHeader } from "../MenuData/MenuHeader";
import images from "../../assets/images";
import Image from "../Image";
import { PATH } from "../../utils/constant";
import {
    faCaretDown,
    faClose,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar";

const cx = classNames.bind(styles);

function Header(props) {
    const { getStateShowSearchBarFromParent } = props;
    const navigate = useNavigate();

    const [isShowSearchBar, setIsShowSearchBar] = useState(false);

    const handleShowSearchBar = () => {
        setIsShowSearchBar(true);
        getStateShowSearchBarFromParent(true);
    };

    const handleCloseSearchBar = () => {
        setIsShowSearchBar(false);
        getStateShowSearchBarFromParent(false);
    };

    return (
        <div className={cx("header-wrapper")}>
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
                </div>
            </div>
            {isShowSearchBar && (
                <SearchBar handleCloseSearchBar={handleCloseSearchBar} />
            )}
        </div>
    );
}

export default Header;
