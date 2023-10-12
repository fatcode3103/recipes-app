import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import styles from "./AccountWrapper.module.scss";
import HeaderRecipePosting from "../Header/HeaderRecipePosting";
import Footer from "../Footer";
import Image from "../Image";
import { NavLink } from "react-router-dom";
import { menuAccount1, menuAccount2 } from "../MenuData/MenuAccount";

const cx = classNames.bind(styles);

function AccountWrapper({ children }) {
    const location = useLocation();

    return (
        <div className={cx("profile-container")}>
            <HeaderRecipePosting />
            <div className={cx("profile-content", "row")}>
                <div className={cx("menu-bar-wrapper", "col-3 p-0")}>
                    <div className={cx("menu-bar")}>
                        <div className={cx("menu-bar-1")}>
                            <div className={cx("info-short")}>
                                <Image />
                                <div>Hi, user12435@gmail.com</div>
                            </div>
                            {menuAccount1.map((item, index) => {
                                const isActive = location.pathname === item.to;
                                return (
                                    <NavLink
                                        key={index}
                                        activeClassName="active"
                                        to={item.to}
                                        className={cx("menu-bar-item", {
                                            active: isActive,
                                        })}
                                    >
                                        {item.title}
                                    </NavLink>
                                );
                            })}
                        </div>
                        <div className={cx("menu-bar-2")}>
                            {menuAccount2.map((item, index) => {
                                const isActive = location.pathname === item.to;
                                return (
                                    <NavLink
                                        key={index}
                                        activeClassName="active"
                                        to={item.to}
                                        className={cx("menu-bar-item", {
                                            active: isActive,
                                        })}
                                    >
                                        {item.title}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx("content-right", "col-9 p-0")}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AccountWrapper;
