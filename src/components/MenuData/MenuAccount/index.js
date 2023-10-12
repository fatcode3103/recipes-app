import { PATH } from "../../../utils/constant";

export const menuAccount1 = [
    {
        title: "Thông tin cá nhân",
        to: PATH.PROFILE,
    },
    {
        title: "Cài đặt hồ sơ công khai",
        to: PATH.PROFILE_SETTING,
    },
    {
        title: "Đổi mật khẩu",
        to: PATH.CHANGE_PASSWORD,
    },
];

export const menuAccount2 = [
    {
        title: "Các mục đã lưu",
        to: PATH.COLLECTION,
    },
    {
        title: "Tất cả các công thức cá nhân",
        to: PATH.ALL_RECIPE,
    },
    {
        title: "Đánh giá",
        to: PATH.REVIEW,
    },
];
