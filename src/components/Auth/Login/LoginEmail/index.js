import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from "./LoginEmail.module.scss";
import AuthPage from "../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../Button";
import { PATH } from "../../../../utils/constant";

const cx = classNames.bind(styles);

function LoginEmail() {
    const [isShowPass, setIsShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) =>
        alert(`Valid with email: ${data.email}, password: ${data.password}`);

    return (
        <div>
            <AuthPage>
                <div className={cx("form")}>
                    <div className={cx("form-header")}>Log in with email</div>
                    <div>
                        <div className={cx("input-wrapper")}>
                            <label>Địa chỉ Email</label>
                            <input
                                {...register("email", {
                                    required: "This is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            "Email address is not valid. eg: abc@example.com",
                                    },
                                })}
                                type="email"
                                placeholder="yourname@gmail.com"
                            />
                            {errors.email && (
                                <span className={cx("error-message")}>
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>
                        <div className={cx("input-wrapper")}>
                            <label>Mật khẩu</label>
                            <div className={cx("input-pass")}>
                                <input
                                    {...register("password", {
                                        required: "This is required",
                                        minLength: {
                                            value: 8,
                                            message: "Min length is 8",
                                        },
                                    })}
                                    type={isShowPass ? "text" : "password"}
                                    placeholder="Enter your passowrd"
                                />
                                <span
                                    className={cx("show-pass-icon")}
                                    onClick={() => setIsShowPass(!isShowPass)}
                                >
                                    {isShowPass ? "Hide" : "Show"}
                                </span>
                            </div>
                            {errors.password && (
                                <span className={cx("error-message")}>
                                    {errors.password?.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={cx("keep-login")}>
                        <input type="checkbox" />
                        <span>Giữ tôi luôn đăng nhập</span>
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            className={cx("keep-login-icon")}
                        />
                    </div>
                    <Button
                        size="l"
                        normal="true"
                        onClick={handleSubmit(onSubmit)}
                        className={cx("btn-login")}
                    >
                        Đăng nhập
                    </Button>
                    <Button
                        to={PATH.LOGIN_EMAIL}
                        onlyLink="true"
                        className={cx("forgot-pass")}
                    >
                        Quên mật khẩu?
                    </Button>
                </div>
            </AuthPage>
        </div>
    );
}

export default LoginEmail;
