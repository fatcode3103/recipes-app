import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./CookingTime.module.scss";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CookingTime() {
    return (
        <div className={cx("time-content")}>
            <div className={cx("preparation-time")}>
                <span>Thời gian chuẩn bị</span>
                <div className={cx("preparation-time-input")}>
                    <input type="number" />
                    <select
                        className={cx(
                            "form-select form-select-m",
                            "custom-select"
                        )}
                    >
                        <option selected value="1">
                            Phút
                        </option>
                        <option value="2">Giờ</option>
                        <option value="3">Ngày</option>
                    </select>
                </div>
            </div>
            <div className={cx("cooking-time")}>
                <span>Thời gian nấu (tùy chọn)</span>
                <div className={cx("cooking-time-input")}>
                    <input type="number" />
                    <select
                        className={cx(
                            "form-select form-select-m",
                            "custom-select"
                        )}
                    >
                        <option selected value="1">
                            Phút
                        </option>
                        <option value="2">Giờ</option>
                        <option value="3">Ngày</option>
                    </select>
                </div>
            </div>
            <div className={cx("total-time")}>
                <span>Tổng thời gian</span>
                <span>3 giờ 10 phút</span>
            </div>
            <div className={cx("more-time")}>
                <Button none="true" className={cx("btn-add-time")}>
                    <FontAwesomeIcon icon={faPlus} />
                    Thêm thời gian
                </Button>
                <span>(ví dụ như để nguội, nấu chậm, chín kỹ)</span>
            </div>
        </div>
    );
}

export default CookingTime;
