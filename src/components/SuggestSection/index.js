import classNames from "classnames/bind";

import styles from "./SuggestSection.module.scss";
import Image from "../Image";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function SuggestSection() {
    return (
        <div className={cx("suggest-container")}>
            <div className={cx("suggest-content", "row")}>
                <div className={cx("col-8")}>
                    <Image src={images.imageSlowCooker} />
                    <h3
                        style={{ marginTop: "12px" }}
                        className={cx("underline-red")}
                    >
                        16 bữa tối đơn giản có thể bạn muốn nấu vào mùa thu
                    </h3>
                    <p>
                        Những bữa ăn đơn giản này được chuẩn bị và nấu một cách
                        nhanh chóng để bạn có thể quay trở lại những buổi tối
                        mùa thu bận rộn của mình.
                    </p>
                </div>
                <div className={cx("col-4", "news")}>
                    <div className={cx("news-content")}>
                        <p className={cx("news-content-title")}>
                            Tin tức & Xu hướng
                        </p>
                        <div>
                            <div className={cx("news-item")}>
                                <Image src={images.newsSuggest1} />
                                <div className={cx("intro underline-red")}>
                                    Lịch Mùa Vọng đầu tiên này có thể là lịch kỳ
                                    lạ nhất mà chúng tôi từng thấy
                                </div>
                            </div>
                            <div className={cx("news-item")}>
                                <Image src={images.newsSuggest2} />
                                <div className={cx("intro underline-red")}>
                                    Người hâm mộ yêu thích chương trình
                                    Firehouse này đã trở lại sau 8 năm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuggestSection;
