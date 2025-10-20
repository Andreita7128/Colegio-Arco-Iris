import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo-h.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // 🔸 Cambia el fondo del navbar al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 10) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="navbar">
            <div className="nav-container">
                {/* 🔷 Logo */}
                <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
                    <img src={Logo} alt="Colegio Arco Iris Logo" />
                </Link>

                {/* 🔹 Botón hamburguesa */}
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* 🔸 Enlaces */}
                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
                    <NavLink to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</NavLink>
                    <NavLink to="/academia" onClick={() => setMenuOpen(false)}>Academia</NavLink>
                    <NavLink to="/vida-escolar" onClick={() => setMenuOpen(false)}>Vida Escolar</NavLink>
                    <NavLink to="/admisiones" onClick={() => setMenuOpen(false)}>Admisiones</NavLink>
                    <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
                </nav>
            </div>
        </header>
    );
}
