import { Routes, Route } from "react-router-dom";
import OrdenarNomes from "./pages/OrdenarNomes";
import OrdenarQuadrinhos from "./pages/OrdenarQuadrinhos";
import ParedeQuadrinhosFixos from "./pages/ParedeQuadrinhosFixos";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import ParedeMobile from "./pages/ParedeMobile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="parede" element={<ParedeQuadrinhosFixos />} />
        <Route path="parede-mobile" element={<ParedeMobile />} />
        <Route path="ordenar-quadrinhos" element={<OrdenarQuadrinhos />} />
        <Route path="ordenar-nomes" element={<OrdenarNomes />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
