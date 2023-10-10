import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { PATH } from "./constant";

function PublicRouter({ Component }) {
    const isLogin = true;
    if (isLogin) return <Component />;
    else {
        toast.info("Bạn cần đăng nhập !");
        return <Navigate to={PATH.LOGIN} />;
    }
}

export default PublicRouter;
