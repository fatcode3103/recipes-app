import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./AllRecipes.module.scss";
import AccountWrapper from "../../../components/AccountWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function AllRecipes() {
    return (
        <div>
            <AccountWrapper>
                <div className={cx("recipes-container")}>
                    <div className={cx("recipes-content")}>
                        <div className={cx("recipes-header")}>
                            <p>Tất cả các mục đã lưu</p>
                            <p>Tất cả nội dung yêu thích của bạn ở một nơi</p>
                            <p>
                                <FontAwesomeIcon
                                    icon={faUserGroup}
                                    style={{ marginRight: "4px" }}
                                />
                                <span>
                                    Những người dùng khác nhìn thấy những gì bạn
                                    lưu
                                </span>
                            </p>
                        </div>
                        <div className={cx("recipes-body")}></div>
                        <div className={cx("recipes-footer")}>
                            <Button fitContent="true" disable="true">
                                Tải thêm
                            </Button>
                        </div>
                    </div>
                </div>
            </AccountWrapper>
        </div>
    );
}

export default AllRecipes;
