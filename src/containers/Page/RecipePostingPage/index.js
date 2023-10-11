import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./RecipePostingPage.module.scss";
import HeaderRecipePosting from "../../../components/Header/HeaderRecipePosting";
import Image from "../../../components/Image";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import RecipeDescriptionSection from "../../../components/RecipeDescriptionSection";
import IngredientSection from "../../../components/IngredientSection";
import InstructSection from "../../../components/InstructSection";
import CookingTime from "../../../components/CookingTime";

const cx = classNames.bind(styles);

function RecipePostingPage() {
    const handleRadioChange = (e) => {
        console.log(e);
    };

    return (
        <div className={cx("recipe-post-container")}>
            <HeaderRecipePosting />
            <div className={cx("recipe-post-content")}>
                <Image src={images.imgRecipePost} className={cx("image-top")} />
                <div className={cx("form")}>
                    <div className={cx("header-form")}>
                        <div className={cx("title-form")}>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={cx("title-icon")}
                            />
                            <div className={cx("title-text")}>
                                Thêm công thức
                            </div>
                        </div>
                        <p className={cx("header-form-desc")}>
                            Tải lên công thức nấu ăn cá nhân thật dễ dàng! Thêm
                            của bạn vào mục yêu thích của bạn, chia sẻ với bạn
                            bè, gia đình hoặc cộng đồng Allrecipes.
                        </p>
                    </div>
                    <div className={cx("content-form")}>
                        <RecipeDescriptionSection />
                        <IngredientSection />
                        <InstructSection />
                        <div className={cx("ration")}>
                            <p>Khẩu phần</p>
                            <input type="number" placeholder="0" />
                        </div>
                        <CookingTime />
                        <div className={cx("note")}>
                            <p>Ghi chú (Tùy chọn)</p>
                            <p>
                                Thêm bất kỳ lời khuyên hữu ích nào về việc thay
                                thế, phục vụ hoặc bảo quản nguyên liệu tại đây.
                            </p>
                            <Button
                                outline="true"
                                className={cx("btn-add-note")}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                Thêm ghi chú
                            </Button>
                        </div>
                        <div className={cx("recipe-public")}>
                            <p>Công khai công thức này?</p>
                            <div className={cx("public-option")}>
                                <label>
                                    <input
                                        type="radio"
                                        name="publicOption"
                                        value="yes"
                                        onChange={(e) =>
                                            handleRadioChange(e.target.value)
                                        }
                                    />{" "}
                                    Công khai công thức nấu ăn
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="publicOption"
                                        value="no"
                                        onChange={(e) =>
                                            handleRadioChange(e.target.value)
                                        }
                                    />{" "}
                                    Bí quyết cá nhân
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx("footer-form")}>
                        <Button btnCancel="true">Hủy bỏ</Button>
                        <Button normal="true">Đăng công thức</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipePostingPage;
