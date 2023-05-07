import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "../pages/Homepage";
import { Aboutpage } from "../pages/Aboutpage";
import { Projectspage } from "../pages/Porjetcpage";
import { Curso1 } from "../pages/Curso1";
import { Curso2 } from "../pages/Curso2";
import { Curso3 } from "../pages/Curso3";
import { Curso4 } from "../pages/Curso4";
import { Curso5 } from "../pages/Curso5";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/sobre" element={<Aboutpage />} />
                    <Route path="/projetos" element={<Projectspage />} />
                    <Route path="/curso1" element={<Curso1 />} />
                    <Route path="/curso2" element={<Curso2 />} />
                    <Route path="/curso3" element={<Curso3 />} />
                    <Route path="/curso4" element={<Curso4 />} />
                    <Route path="/curso5" element={<Curso5 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
