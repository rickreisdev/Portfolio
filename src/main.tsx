import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import "./lib/i18n";

import "./assets/styles/global.scss";
import "./assets/styles/media-query/query1085px.scss";
import "./assets/styles/media-query/query-375px.scss";
import "./assets/styles/media-query/query-400px.scss";
import "./assets/styles/media-query/query-425px.scss";
import "./assets/styles/media-query/query485px.scss";
import "./assets/styles/media-query/query710px.scss";
import "./assets/styles/media-query/query2560px.scss";
import "./assets/styles/media-query/query1343-1085px.scss";
import "./assets/styles/media-query/query-1343minpx.scss";
// import Experiencia from './sessions/Experiencia';
import { HelmetProvider } from "react-helmet-async";
import Home from "./sessions/Home";
import Sobre from "./sessions/Sobre";
import Habilidades from "./sessions/Habilidades";
import Projetos from "./sessions/Projetos";

ReactDOM.createRoot(
    document.getElementById("root")!
).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/sobre"
                            element={<Sobre />}
                        />
                        {/* <Route path='/experiencia' element={<Experiencia />} /> */}
                        <Route
                            path="/habilidades"
                            element={<Habilidades />}
                        />
                        <Route
                            path="/projetos"
                            element={<Projetos />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);
