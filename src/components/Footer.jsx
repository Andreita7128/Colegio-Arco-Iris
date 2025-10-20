import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">

                {/* Logo + identidad */}
                <div className="footer-brand">
                    <img src={logo} alt="Logo Colegio Arco Iris" className="footer-logo" />
                    <div className="footer-slogan">
                        <p className="footer-description">Con Alegría, Ternura y Amor</p>
                        <p className="footer-description">Impartimos Educación</p>
                    </div>
                </div>

                {/* Enlaces rápidos */}
                <div className="footer-links">
                    <h4>Explora</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/propuesta-educativa">Propuesta educativa</a></li>
                        <li><a href="/vida-escolar">Vida escolar</a></li>
                        <li><a href="/admisiones">Admisiones</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Contacto + Redes */}
                <div className="footer-contact">
                    <h4>Contáctanos</h4>
                    <p>Calle 37 No. 1C – 09, Barrio Cándido Leguízamo</p>
                    <p>Neiva, Huila – Colombia</p>
                    <p>📞 (608) 8752267</p>
                    <p>✉️ colegioarcoiris@gmail.com</p>

                    {/* Redes sociales */}
                    <div className="footer-socials">
                        <h4 className="socials-title">Síguenos</h4>
                        <div className="social-icons">
                            <a
                                href="https://www.facebook.com/colegioarcoirisneiva"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Colegio Arco Iris"
                                className="social-link social-facebook"
                            >
                                {/* Ícono Facebook */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.414c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.466.099 2.797.143v3.246l-1.919.001c-1.506 0-1.797.717-1.797 1.767v2.317h3.59l-.467 3.696h-3.123V24h6.127C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.youtube.com/@colegioarcoirisneiva"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube Colegio Arco Iris"
                                className="social-link social-youtube"
                            >
                                {/* Ícono YouTube */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M23.498 6.186a2.982 2.982 0 0 0-2.099-2.109C19.395 3.5 12 3.5 12 3.5s-7.395 0-9.399.577A2.982 2.982 0 0 0 .502 6.186 31.65 31.65 0 0 0 0 12a31.65 31.65 0 0 0 .502 5.814 2.982 2.982 0 0 0 2.099 2.109C4.605 20.5 12 20.5 12 20.5s7.395 0 9.399-.577a2.982 2.982 0 0 0 2.099-2.109A31.65 31.65 0 0 0 24 12a31.65 31.65 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Colegio Arco Iris – Neiva, Huila</p>
            </div>
        </footer>
    );
}
