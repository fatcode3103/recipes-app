import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { publicRouter } from "./router";
import PublicRouter from "./utils/PublicRouter";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRouter &&
                        publicRouter.length > 0 &&
                        publicRouter.map((route, key) => {
                            const Component = route.component;
                            const isDefaultLayout = route.defaultLayout;
                            return (
                                <Route
                                    key={key}
                                    path={route.path}
                                    element={
                                        isDefaultLayout ? (
                                            <DefaultLayout>
                                                <PublicRouter
                                                    Component={Component}
                                                />
                                            </DefaultLayout>
                                        ) : (
                                            <PublicRouter
                                                Component={Component}
                                            />
                                        )
                                    }
                                />
                            );
                        })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
