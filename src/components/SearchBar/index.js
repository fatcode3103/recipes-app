import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { dataDirectory } from "../FakeData";

const cx = classNames.bind(styles);

function SearchBar(props) {
    const { handleCloseSearchBar } = props;

    return (
        <div className={cx("search-bar-container")}>
            <div className={cx("search-bar-content", "row")}>
                <div className={cx("content-left", "col-6")}>
                    <div className={cx("search")}>
                        <span>Nhập từ khóa</span>
                        <div className={cx("search-input-wrapper")}>
                            <input
                                type="text"
                                className={cx("search-input")}
                                placeholder="Nhập tìm kiếm..."
                            />
                            <FontAwesomeIcon
                                icon={faSearch}
                                className={cx("search-input-icon")}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("content-right", "col-6")}>
                    <div className={cx("directory-wrapper")}>
                        <div className={cx("directory-text")}>Lọc danh mục</div>
                        <div className={cx("row", "directory")}>
                            {dataDirectory.map((item, index) => {
                                return (
                                    <div
                                        className={cx("col-4 mb-3")}
                                        key={index}
                                    >
                                        <div className={cx("dropdown")}>
                                            <button
                                                className={cx(
                                                    "dropdown-toggle",
                                                    "btn-directoty-item"
                                                )}
                                                type="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                {item.title}
                                            </button>
                                            <ul className={cx("dropdown-menu")}>
                                                <li
                                                    className={cx(
                                                        "dropdown-item"
                                                    )}
                                                >
                                                    Action
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx("close-search-bar")}>
                        <FontAwesomeIcon
                            onClick={handleCloseSearchBar}
                            icon={faClose}
                            className={cx("close-search-bar-icon")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
