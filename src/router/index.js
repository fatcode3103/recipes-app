import { PATH } from "../utils/constant";
import Home from "../containers/Page/Home";
import LoginPage from "../components/Auth/Login";
import NotFoundPage from "../components/NotFoundPage";
import RegisterPage from "../components/Auth/Register";
import LoginEmail from "../components/Auth/Login/LoginEmail";
import RegisterEmail from "../components/Auth/Register/RegisterEmail";

export const publicRouter = [
    {
        path: PATH.HOME,
        component: Home,
        defaultLayout: true,
    },
    {
        path: PATH.LOGIN,
        component: LoginPage,
    },
    {
        path: PATH.REGISTER,
        component: RegisterPage,
    },
    {
        path: PATH.LOGIN_EMAIL,
        component: LoginEmail,
    },
    {
        path: PATH.REGISTER_EMAIL,
        component: RegisterEmail,
    },
    {
        path: "*",
        component: NotFoundPage,
    },
];
