import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import "./lib/i18n";
import { HelmetProvider } from "react-helmet-async";

import "./assets/styles/global.scss";
import "./assets/styles/media-query/query1085px.scss";
import "./assets/styles/media-query/query-375px.scss";
import "./assets/styles/media-query/query-400px.scss";
import "./assets/styles/media-query/query485px.scss";
import "./assets/styles/media-query/query710px.scss";
import "./assets/styles/media-query/query2560px.scss";
import "./assets/styles/media-query/query1343-1085px.scss";
import "./assets/styles/media-query/query-1343minpx.scss";

import HomePage from "./sessions/HomePage";
import HomeDev from "./sessions/dev/HomeDev";
import SobreDev from "./sessions/dev/SobreDev";
import HabilidadesDev from "./sessions/dev/HabilidadesDev";
import ProjetosDev from "./sessions/dev/ProjetosDev";
import HomeAudiovisual from "./sessions/audiovisual/HomeAudiovisual";
import SobreAudiovisual from "./sessions/audiovisual/SobreAudiovisual";
import HabilidadesAudiovisual from "./sessions/audiovisual/HabilidadesAudiovisual";
import ProjetosAudiovisual from "./sessions/audiovisual/ProjetosAudiovisual";


ReactDOM.createRoot(
    document.getElementById("root")!
).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route
                            index
                            element={<HomePage />}
                        />

                        <Route path="dev">
                            <Route
                                index
                                element={<HomeDev />}
                            />
                            <Route
                                path="sobre"
                                element={<SobreDev />}
                            />
                            <Route
                                path="habilidades"
                                element={<HabilidadesDev />}
                            />
                            <Route
                                path="projetos"
                                element={<ProjetosDev />}
                            />
                        </Route>

                        <Route path="audiovisual">
                            <Route
                                index
                                element={<HomeAudiovisual />}
                            />
                            <Route
                                path="sobre"
                                element={<SobreAudiovisual />}
                            />
                            <Route
                                path="habilidades"
                                element={<HabilidadesAudiovisual />}
                            />
                            <Route
                                path="projetos"
                                element={<ProjetosAudiovisual />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);
