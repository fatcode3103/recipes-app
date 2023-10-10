import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { publicRouter, loginRouter } from "./router";
import PublicRouter from "./utils/PublicRouter";
import LoginRouter from "./utils/LoginRouter";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRouter.map((route, key) => {
                        const Component = route.component;
                        const DefaultLayout = route.DefaultLayout
                            ? route.DefaultLayout
                            : React.Fragment;
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <PublicRouter Component={Component} />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                    {loginRouter.map((route, key) => {
                        const Component = route.component;
                        const DefaultLayout = route.DefaultLayout
                            ? route.DefaultLayout
                            : React.Fragment;
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <LoginRouter Component={Component} />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
