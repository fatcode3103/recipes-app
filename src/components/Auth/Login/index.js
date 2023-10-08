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
                    <div className={cx("form-header")}>Log in</div>
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
                            <span>Log in with Email</span>
                        </Button>
                        <Button size="l" className={cx("btn", "btn-facebook")}>
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faFacebookF}
                            />
                            <span>Log in with Facebook</span>
                        </Button>
                        <Button size="l" className={cx("btn", "btn-google")}>
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faGoogle}
                            />
                            <span>Log in with Google</span>
                        </Button>
                        <div className={cx("noti")}>
                            <span>Don't have an account?</span>
                            <Button to={PATH.REGISTER} onlyLink="true">
                                Join now
                            </Button>
                        </div>
                    </div>
                </div>
            </AuthPage>
        </div>
    );
}

export default LoginPage;
