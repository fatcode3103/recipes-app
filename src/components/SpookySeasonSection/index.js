import classNames from "classnames/bind";

import styles from "./SpookySeasonSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";
import Image from "../Image";
import { dataSpookySeason } from "../FakeData";

const cx = classNames.bind(styles);

function SpookySeasonSection() {
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("header", "underline-red")}>
                    <h2 className={cx("title")}>Mùa ma quái</h2>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("title-icon")}
                    />
                </div>
                <div className={cx("body", "row")}>
                    <div className={cx("col-6")}>
                        {dataSpookySeason.map((item, index) => {
                            return (
                                <div key={index} className={cx("row mb-5")}>
                                    <div className={cx("col-6")}>
                                        <Image src={item.image} />
                                    </div>
                                    <div
                                        className={cx("col-6")}
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "700",
                                            paddingLeft: "30px",
                                        }}
                                    >
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx("col-6")}>
                        <Image src={images.halloween1} />
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "800",
                                margin: "20px 0px",
                            }}
                            className={cx("underline-red")}
                        >
                            20 công thức thú vị cho mùa Halloween
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpookySeasonSection;
