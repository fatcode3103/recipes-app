import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./AuthPage.module.scss";
import Image from "../Image";
import images from "../../assets/images";
import { PATH } from "../../utils/constant";

const cx = classNames.bind(styles);

function AuthPage({ children }) {
    const navigate = useNavigate();

    const handleRedirectHome = () => {
        navigate(PATH.HOME);
    };

    return (
        <div className={cx("row", "auth-page-container")}>
            <div className={cx("login-header")}>
                <Image
                    onClick={() => handleRedirectHome()}
                    src={images.logoSvg}
                    className={cx("image-logo-header")}
                />
            </div>
            <div className={cx("content-left", "col-lg-6 col-md-12")}>
                <Image
                    src={images.loginDesktop}
                    className={cx("image-desktop")}
                />
            </div>
            <div className={cx("content-right", "col-lg-6 col-md-12")}>
                <div className={cx("form-container")}>
                    <Image
                        onClick={() => handleRedirectHome()}
                        src={images.logoSvg}
                        className={cx("image-logo")}
                    />
                    <div className={cx("form")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
