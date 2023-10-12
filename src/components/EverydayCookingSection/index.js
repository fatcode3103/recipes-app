import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./EverydayCookingSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";
import Image from "../Image";
import { dataEverydayCooking } from "../FakeData";
import ModalSaveRecipe from "../ModalSaveRecipe";

const cx = classNames.bind(styles);

function EverydayCookingSection() {
    const [isShowModalSaveRecipeSuccess, setIsShowModalSaveRecipeSuccess] =
        useState(false);

    const handleSaveRecipe = () => {
        setIsShowModalSaveRecipeSuccess(true);
    };

    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("header", "underline-red")}>
                    <h2 className={cx("title")}>Mang lại sự ấm cúng</h2>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("title-icon")}
                    />
                </div>
                <div className={cx("body", "row")}>
                    {dataEverydayCooking.map((item, index) => {
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
                                        onClick={() => handleSaveRecipe()}
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
            <ModalSaveRecipe
                setIsShowModalSaveRecipeSuccess={
                    setIsShowModalSaveRecipeSuccess
                }
                isShowModalSaveRecipeSuccess={isShowModalSaveRecipeSuccess}
            />
        </div>
    );
}

export default EverydayCookingSection;
