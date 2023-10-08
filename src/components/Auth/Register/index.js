import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import AuthPage from "../index";
import styles from "./RegisterPage.module.scss";
import Button from "../../Button";
import { PATH } from "../../../utils/constant";

const cx = classNames.bind(styles);

function RegisterPage() {
    const navigate = useNavigate();

    const handleRegisterEmail = () => {
        navigate(PATH.REGISTER_EMAIL);
    };

    return (
        <div className={cx("auth-page-container")}>
            <AuthPage>
                <div className={cx("form")}>
                    <div className={cx("form-header")}>
                        <div>Sign up</div>
                        <span>
                            Sign up to save and review your favorite recipes.
                        </span>
                    </div>
                    <div className={cx("form-content")}>
                        <Button
                            size="l"
                            className={cx("btn", "btn-email")}
                            onClick={() => handleRegisterEmail()}
                        >
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faEnvelope}
                            />
                            <span>Sign up with Email</span>
                        </Button>
                        <Button size="l" className={cx("btn", "btn-facebook")}>
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faFacebookF}
                            />
                            <span>Sign up with Facebook</span>
                        </Button>
                        <Button size="l" className={cx("btn", "btn-google")}>
                            <FontAwesomeIcon
                                className={cx("icon-button")}
                                icon={faGoogle}
                            />
                            <span>Sign up with Google</span>
                        </Button>
                        <div className={cx("noti")}>
                            <span>Have an account?</span>
                            <Button to={PATH.LOGIN} onlyLink="true">
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </AuthPage>
        </div>
    );
}

export default RegisterPage;
