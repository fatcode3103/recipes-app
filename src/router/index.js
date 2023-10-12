import { PATH } from "../utils/constant";
import Home from "../containers/Page/Home";
import LoginPage from "../components/Auth/Login";
import NotFoundPage from "../components/NotFoundPage";
import RegisterPage from "../components/Auth/Register";
import LoginEmail from "../components/Auth/Login/LoginEmail";
import RegisterEmail from "../components/Auth/Register/RegisterEmail";
import RecipePostingPage from "../containers/Page/RecipePostingPage";
import DefaultLayout from "../components/DefaultLayout";
import Profile from "../containers/Page/Profile";
import ProfileSetting from "../containers/Page/ProfileSetting";
import ChangePassword from "../containers/Page/ChangePassword";
import Collections from "../containers/Page/Collections";
import AllRecipes from "../containers/Page/AllRecipes";
import Review from "../containers/Page/Review";

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
    {
        path: PATH.PROFILE,
        component: Profile,
    },
    {
        path: PATH.PROFILE_SETTING,
        component: ProfileSetting,
    },
    {
        path: PATH.CHANGE_PASSWORD,
        component: ChangePassword,
    },
    {
        path: PATH.COLLECTION,
        component: Collections,
    },
    {
        path: PATH.ALL_RECIPE,
        component: AllRecipes,
    },
    {
        path: PATH.REVIEW,
        component: Review,
    },
];
