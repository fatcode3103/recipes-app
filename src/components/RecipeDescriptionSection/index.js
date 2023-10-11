import classNames from "classnames/bind";
import { useRef } from "react";

import styles from "./RecipeDescriptionSection.module.scss";
import Image from "../Image";
import images from "../../assets/images";
import PhotoViewWrapper from "../PhotoView";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const cx = classNames.bind(styles);

function RecipeDescriptionSection() {
    const [previewImage, setPreviewImage] = useState("");

    const myInputFile = useRef();

    const handleUploadImage = () => {
        myInputFile.current.click();
    };

    const handleChangeFile = (e) => {
        if (e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className={cx("recipe-desc", "row")}>
            <div className={cx("col-7")}>
                <div className={cx("title")}>
                    <span>Tiêu đề công thức</span>
                    <input type="text" placeholder="Nhập tiêu đề" />
                </div>
                <div className={cx("description")}>
                    <span>Mô tả</span>
                    <textarea placeholder="Chia sẻ câu chuyện phía sau công thức nấu ăn của bạn! Điều gì khiến nó trở nên đặc biệt."></textarea>
                </div>
            </div>
            <div className={cx("col-5")}>
                <span style={{ fontWeight: "600" }}>
                    Hình ảnh (không bắt buộc)
                </span>
                <div
                    className={cx("up-img-wrapper")}
                    onClick={() => (previewImage ? {} : handleUploadImage())}
                >
                    {!previewImage ? (
                        <>
                            <Image
                                src={images.noUpImage}
                                className={cx("up-img")}
                            />
                            <Image
                                src={images.noUpImageIcon}
                                className={cx("up-img-icon")}
                            />
                        </>
                    ) : (
                        <>
                            <PhotoViewWrapper
                                src={previewImage}
                                className={cx("up-img")}
                            />
                            <Button
                                className={cx("btn-upload-image")}
                                outline="true"
                                onClick={() => handleUploadImage()}
                            >
                                <FontAwesomeIcon icon={faUpload} />
                                <span>Chọn ảnh khác</span>
                            </Button>
                        </>
                    )}
                    <input
                        type="file"
                        ref={myInputFile}
                        hidden
                        onChange={(e) => handleChangeFile(e)}
                    />
                </div>

                <span style={{ fontSize: "12px" }}>
                    Sử dụng JPEG hoặc PNG. Kích thước tối thiểu là 960 x 960.
                </span>
            </div>
        </div>
    );
}

export default RecipeDescriptionSection;
