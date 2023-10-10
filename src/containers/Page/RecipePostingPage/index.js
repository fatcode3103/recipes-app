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

const cx = classNames.bind(styles);

function RecipePostingPage() {
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
                        <div className={cx("ration")}></div>
                        <div className={cx("time")}></div>
                        <div className={cx("note")}></div>
                        <div className={cx("recipe-public")}></div>
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
