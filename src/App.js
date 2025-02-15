import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout, { ContentFallback } from "./layout/DefaultLayout";
import { MainPage } from "./pages/MainPage/MainPage.async.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async.jsx";
import { OurTeamPage } from "./pages/OurTeamPage/OurTeamPage.async.jsx";
import { ContactPage } from "./pages/ContactPage/ContactPage.async.jsx";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage.async.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <MainPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/team"
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <OurTeamPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <ContactPage />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/gallery"
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <GalleryPage />
                            </Suspense>
                        }
                    />
                </Route>

                <Route
                    path="*"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ErrorPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    );
};
export default App;
