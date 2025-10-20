import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// 🟢 Páginas
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Academia from "./pages/Academia"
import VidaEscolar from "./pages/VidaEscolar"
import Admisiones from "./pages/Admisiones"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Páginas internas */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/vida-escolar" element={<VidaEscolar />} />
        <Route path="/admisiones" element={<Admisiones />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Ruta de respaldo por si se ingresa una URL no válida */}
        <Route
          path="*"
          element={
            <main style={{ padding: "5rem", textAlign: "center" }}>
              <h1>404</h1>
              <p>Página no encontrada</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
