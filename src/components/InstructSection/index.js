import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./InstructSection.module.scss";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function InstructSection() {
    const [inputArr, setInputArr] = useState([""]);

    const handleAddInput = () => {
        setInputArr((prev) => [...prev, ""]);
    };

    const handleChangeInput = (index, value) => {
        const updatedIngredients = [...inputArr];
        updatedIngredients[index] = value;
        setInputArr(updatedIngredients);
    };

    const handleRemoveInput = (index) => {
        const updatedIngredients = [...inputArr];
        updatedIngredients.splice(index, 1);
        setInputArr(updatedIngredients);
    };

    return (
        <div className={cx("instruct")}>
            <p className={cx("title")}>Hướng dẫn</p>
            <p className={cx("desc")}>
                Giải thích cách thực hiện công thức nấu ăn của bạn, bao gồm
                nhiệt độ lò nướng, thời gian nướng hoặc nấu cũng như kích thước
                chảo, v.v. Sử dụng các tiêu đề tùy chọn để sắp xếp các phần khác
                nhau của công thức (ví dụ: Chuẩn bị, Nướng, Trang trí).
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span>Nhập hướng dẫn bên dưới</span>
                <span
                    style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Sắp xếp lại
                </span>
            </div>
            <div className={cx("input-list")}>
                {inputArr.map((item, index) => {
                    return (
                        <div>
                            <span className={cx("step-text")}>
                                Bước {index + 1}
                            </span>
                            <div key={index} className={cx("input-item")}>
                                <input
                                    value={item}
                                    onChange={(e) =>
                                        handleChangeInput(index, e.target.value)
                                    }
                                    type="text"
                                    placeholder="Thêm hướng dẫn..."
                                />
                                <FontAwesomeIcon
                                    onClick={() => handleRemoveInput(index)}
                                    icon={faCircleXmark}
                                    className={cx("input-item-icon")}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx("button")}>
                <Button outline="true" onClick={() => handleAddInput()}>
                    <FontAwesomeIcon icon={faPlus} />
                    Thêm bước
                </Button>
            </div>
        </div>
    );
}

export default InstructSection;
