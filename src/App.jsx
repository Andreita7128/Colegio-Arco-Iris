import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

// Páginas
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Academia from "./pages/Academia"
import VidaEscolar from "./pages/VidaEscolar"
import Admisiones from "./pages/Admisiones"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/vida-escolar" element={<VidaEscolar />} />
        <Route path="/admisiones" element={<Admisiones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
