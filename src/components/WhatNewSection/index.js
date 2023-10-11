import classNames from "classnames/bind";

import styles from "./WhatNewSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";
import Image from "../Image";
import { dataWhatNew } from "../FakeData";

const cx = classNames.bind(styles);

function WhatNewSection() {
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("header", "underline-red")}>
                    <h2 className={cx("title")}>Có gì mới ?</h2>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("title-icon")}
                    />
                </div>
                <div className={cx("body", "row")}>
                    {dataWhatNew.map((item, index) => {
                        return (
                            <div key={index} className={cx("col-4 mb-5")}>
                                <div className={cx("image-wrapper")}>
                                    <Image
                                        src={item.image}
                                        className={cx("image")}
                                    />
                                    <Image
                                        src={images.starLogo}
                                        className={cx("star-logo")}
                                    />
                                </div>
                                <div className={cx("title-item")}>
                                    <p className={cx("underline-red")}>
                                        {item.title}
                                    </p>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx("star-icon")}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx("star-icon")}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx("star-icon")}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx("star-icon")}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx("star-icon")}
                                        />
                                        <span>100 lượt đánh giá</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhatNewSection;
