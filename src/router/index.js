import { PATH } from "../utils/constant";
import Home from "../containers/Page/Home";
import LoginPage from "../components/Auth/Login";
import NotFoundPage from "../components/NotFoundPage";
import RegisterPage from "../components/Auth/Register";
import LoginEmail from "../components/Auth/Login/LoginEmail";
import RegisterEmail from "../components/Auth/Register/RegisterEmail";
import RecipePostingPage from "../containers/Page/RecipePostingPage";
import DefaultLayout from "../components/DefaultLayout";

export const publicRouter = [
    {
        path: PATH.HOME,
        component: Home,
        DefaultLayout: DefaultLayout,
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

export const loginRouter = [
    {
        path: PATH.RECIPE_POSTING,
        component: RecipePostingPage,
    },
];
