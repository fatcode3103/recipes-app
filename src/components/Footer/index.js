import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Footer.module.scss";
import images from "../../assets/images";
import Image from "../Image";
import Button from "../Button";
import {
    dataContactFooter,
    dataTextFooter1,
    dataTextFooter2,
    dataTextFooter3,
} from "../FakeData";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("footer-container")}>
            <div className={cx("footer-content", "row")}>
                <div className={cx("col-4")}>
                    <div className={cx("content-left")}>
                        <div className={cx("news")}>
                            <Image src={images.logoSvg} size="m" />
                            <Button outline="true" size="m">
                                Bản tin
                            </Button>
                            <a
                                target="_blank"
                                without
                                rel="noreferrer"
                                href="https://www.magazines.com/allrecipes-magazine.html?utm_source=allrecipes.com&utm_medium=owned&utm_campaign=i204arrfw2801"
                            >
                                <Image src={images.imageFooter} />
                            </a>
                        </div>
                        <div className={cx("contact")}>
                            <p>Theo dõi chúng tôi</p>
                            <div className={cx("contact-icon")}>
                                {dataContactFooter.map((item, index) => {
                                    return (
                                        <a
                                            target="_blank"
                                            without
                                            rel="noreferrer"
                                            href={item.link}
                                            className={cx("contact-icon-item")}
                                            key={index}
                                        >
                                            {item.icon}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("col-8")}>
                    <div className={cx("content-right", "row")}>
                        <div className={cx("col-4")}>
                            {dataTextFooter1.map((item, index) => {
                                return <p key={index}>{item.title}</p>;
                            })}
                        </div>
                        <div className={cx("col-4")}>
                            {dataTextFooter2.map((item, index) => {
                                return <p key={index}>{item.title}</p>;
                            })}
                        </div>
                        <div className={cx("col-4")}>
                            {dataTextFooter3.map((item, index) => {
                                return <p key={index}>{item.title}</p>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
