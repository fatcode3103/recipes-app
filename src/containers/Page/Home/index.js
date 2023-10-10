import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import SuggestSection from "../../../components/SuggestSection";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("home-container")}>
            <div className={cx("snack-bar")}>
                <div className={cx("snack-bar-content")}>
                    <div className={cx("snack-bar-text-item")}>
                        <span>America's</span>
                        <span>#1 Trusted Recipe Resource</span>
                        <span>since 1997</span>
                    </div>
                    <div className={cx("snack-bar-text-item")}>
                        <span>113K</span>
                        <span>Original Recipes</span>
                    </div>
                    <div className={cx("snack-bar-text-item")}>
                        <span>6.9M+</span>
                        <span>Ratings & Reviews</span>
                    </div>
                    <div className={cx("snack-bar-text-item")}>
                        <span>60M</span>
                        <span>Home Cooks</span>
                    </div>
                </div>
            </div>
            <div className={cx("home-content")}>
                <SuggestSection />
            </div>
        </div>
    );
}

export default Home;
