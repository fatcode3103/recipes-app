import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from "./RegisterEmail.module.scss";
import AuthPage from "../..";
import Button from "../../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function RegisterEmail() {
    const [isShowPass, setIsShowPass] = useState(false);
    const [isValidPasswordArr, setIsValidPasswordArr] = useState([]);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) =>
        alert(`Sign up with email: ${data.email}, password: ${data.password}`);

    let listValid = [
        {
            title: "At least 8 characters",
        },
        {
            title: "Is not the email address",
        },
        {
            title: "One uppercase letter",
        },
        {
            title: "One lowercase letter",
        },
        {
            title: "One number",
        },
    ];

    const handleCheckPasswordValid = (password) => {
        const validCriteria = [
            password.length >= 8,
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(password),
            /[A-Z]/.test(password),
            /[a-z]/.test(password),
            /[0-9]/.test(password),
        ];

        setIsValidPasswordArr(
            validCriteria.map((criteria, index) => (criteria ? index : -1))
        );

        if (validCriteria.every((item) => item)) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    };

    return (
        <div>
            <AuthPage>
                <div className={cx("form")}>
                    <div className={cx("form-header")}>Tạo một tài khoản</div>
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
                                    })}
                                    type={isShowPass ? "text" : "password"}
                                    placeholder="Enter your passowrd"
                                    onChange={(e) =>
                                        handleCheckPasswordValid(e.target.value)
                                    }
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
                    <div className={cx("list-valid")}>
                        {listValid.map((item, index) => {
                            return (
                                <p className={cx("valid-item")} key={index}>
                                    {isValidPasswordArr.includes(index) ? (
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className={cx(
                                                "valid-item-icon-check"
                                            )}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            className={cx("valid-item-icon")}
                                        />
                                    )}
                                    <span>{item.title}</span>
                                </p>
                            );
                        })}
                    </div>
                    <Button
                        size="l"
                        normal="true"
                        onClick={handleSubmit(onSubmit)}
                        className={cx("btn-signup")}
                        disable={!isPasswordValid}
                    >
                        Đăng ký
                    </Button>
                    <div className={cx("info-footer-form")}>
                        <span>Bằng cách đăng ký, bạn đồng ý với</span>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.dotdashmeredith.com/brands-termsofservice"
                        >
                            Điều khoản sử dụng
                        </a>
                        <span>và</span>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.dotdashmeredith.com/brands-privacy"
                        >
                            Chính sách quyền riêng tư
                        </a>
                    </div>
                </div>
            </AuthPage>
        </div>
    );
}

export default RegisterEmail;
