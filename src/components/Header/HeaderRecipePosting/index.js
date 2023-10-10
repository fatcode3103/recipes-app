import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./HeaderRecipePosting.module.scss";
import Image from "../../Image";
import images from "../../../assets/images";
import { PATH } from "../../../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function HeaderRecipePosting() {
    const navigate = useNavigate();

    return (
        <div className={cx("header-container")}>
            <div className={cx("header-content")}>
                <Image
                    src={images.logoSvg}
                    className={cx("header-logo")}
                    onClick={() => navigate(PATH.HOME)}
                />
                <div className={cx("search")}>
                    <input type="text" placeholder="Tìm công thức..." />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className={cx("search-icon")}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderRecipePosting;
