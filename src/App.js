import { Routes, Route } from "react-router-dom";
import OrdenarNomes from "./pages/OrdenarNomes";
import OrdenarQuadrinhos from "./pages/OrdenarQuadrinhos";
import ParedeQuadrinhosFixos from "./pages/ParedeQuadrinhosFixos";

import Parede1 from "./pages/Parede1";
import Parede2 from "./pages/Parede2";
import Parede3 from "./pages/Parede3";
import Parede4 from "./pages/Parede4";

import Home from "./pages/Home";
import Hino from "./pages/Hino";
import Quiz from "./pages/Quiz";
import ParedeMobile from "./pages/ParedeMobile";
import ParedeHomenageados from "./pages/ParedeHomenageados";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hino" element={<Hino />} />
        <Route path="parede" element={<ParedeQuadrinhosFixos />} />
        <Route path="parede-1" element={<Parede1 />} />
        <Route path="parede-2" element={<Parede2 />} />
        <Route path="parede-3" element={<Parede3 />} />
        <Route path="parede-4" element={<Parede4 />} />
        <Route path="homenageados" element={<ParedeHomenageados />} />
        <Route path="parede-mobile" element={<ParedeMobile />} />
        <Route path="ordenar-quadrinhos" element={<OrdenarQuadrinhos />} />
        <Route path="ordenar-nomes" element={<OrdenarNomes />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
