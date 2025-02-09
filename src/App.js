import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout, { ContentFallback } from "./layout/DefaultLayout";
import { MainPage } from "./components/pages/MainPage/MainPage.async.jsx";
// import { OurTeam } from

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MainPage />
                            </Suspense>
                        }
                    />
                    {/* <Route
                        index
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <OurTeam />
                            </Suspense>
                        }
                    /> */}
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ErrorPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};
export default App;
