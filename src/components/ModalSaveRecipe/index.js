import classNames from "classnames/bind";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

import styles from "./ModalSaveRecipe.module.scss";
import images from "../../assets/images";
import Image from "../../components/Image";
import Button from "../../components/Button";
import { PATH } from "../../utils/constant";

const cx = classNames.bind(styles);

function ModalSaveRecipe(props) {
    const { isShowModalSaveRecipeSuccess, setIsShowModalSaveRecipeSuccess } =
        props;

    const handleClose = () => {
        setIsShowModalSaveRecipeSuccess(false);
    };

    return (
        <>
            <Modal
                show={isShowModalSaveRecipeSuccess}
                onHide={handleClose}
                keyboard={false}
                centered
            >
                <div className={cx("modal-container")}>
                    <div className={cx("modal-content")}>
                        <div className={cx("content-1")}>
                            <Image size="s" src={images.iconSuccess} />
                            <span>Đã lưu!</span>
                        </div>
                        <div className={cx("content-2")}>
                            <Button to={PATH.ALL_RECIPE}>
                                Xem tất cả các mục đã được lưu
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalSaveRecipe;
