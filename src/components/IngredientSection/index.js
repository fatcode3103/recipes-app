import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./IngredientSection.module.scss";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function IngredientSection() {
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
        <div className={cx("ingredient")}>
            <p className={cx("ingredient-title")}>Nguyên liệu</p>
            <p className={cx("ingredient-desc")}>
                Nhập một thành phần trên mỗi dòng. Bao gồm số lượng (ví dụ: cốc,
                thìa) và bất kỳ chế phẩm đặc biệt nào (ví dụ: rây, làm mềm, cắt
                nhỏ). Sử dụng các tiêu đề tùy chọn để sắp xếp các phần khác nhau
                của công thức (ví dụ: Bánh, Kem phủ kem, Nước sốt).
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span>Nhập các thành phần bên dưới</span>
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
            <div className={cx("ingredient-input-list")}>
                {inputArr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx("ingredient-input-item")}
                        >
                            <input
                                value={item}
                                onChange={(e) =>
                                    handleChangeInput(index, e.target.value)
                                }
                                type="text"
                                placeholder="Thêm nguyên liệu..."
                            />
                            <FontAwesomeIcon
                                onClick={() => handleRemoveInput(index)}
                                icon={faCircleXmark}
                                className={cx("ingredient-input-item-icon")}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={cx("ingredient-button")}>
                <Button outline="true" onClick={() => handleAddInput()}>
                    <FontAwesomeIcon icon={faPlus} />
                    Thêm nguyên liệu
                </Button>
            </div>
        </div>
    );
}

export default IngredientSection;
