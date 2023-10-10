import classNames from "classnames/bind";

import styles from "./RecipeDescriptionSection.module.scss";
import Image from "../Image";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function RecipeDescriptionSection() {
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
                <div className={cx("up-img-wrapper")}>
                    <Image src={images.noUpImage} className={cx("up-img")} />
                    <Image
                        src={images.noUpImageIcon}
                        className={cx("up-img-icon")}
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
