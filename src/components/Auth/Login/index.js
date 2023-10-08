import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import AuthPage from "../index";
import styles from "./LoginPage.module.scss";
import Button from "../../Button";
import { PATH } from "../../../utils/constant";

const cx = classNames.bind(styles);

function LoginPage() {
    const navigate = useNavigate();

    const handleLoginEmail = () => {
        navigate(PATH.LOGIN_EMAIL);
    };

    return (
        <div className={cx("auth-page-container")}>
            <AuthPage>
                <div className={cx("form")}>
                    <div className={cx("form-header")}>Đăng nhập</div>
                    <div className={cx("form-content")}>
                        <Button
                            size="l"
                            className={cx("btn", "btn-email")}
                            onClick={() => handleLoginEmail()}
                        >
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faEnvelope}
                            />
                            <span>Đăng nhâp với Email</span>
                        </Button>
                        <Button size="l" className={cx("btn", "btn-facebook")}>
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faFacebookF}
                            />
                            <span>Đăng nhâp với Facebook</span>
                        </Button>
                        <Button size="l" className={cx("btn", "btn-google")}>
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faGoogle}
                            />
                            <span>Đăng nhâp với Google</span>
                        </Button>
                        <div className={cx("noti")}>
                            <span>Bạn chưa có tài khoản?</span>
                            <Button to={PATH.REGISTER} onlyLink="true">
                                Tham gia ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </AuthPage>
        </div>
    );
}

export default LoginPage;
