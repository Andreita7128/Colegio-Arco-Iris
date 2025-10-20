import { Link } from "react-router-dom";
import "./HeroBanner.css";
import Banner from "../assets/Banner.jpg";
import Nube from "../assets/Nube.png";
import Degradado from "../assets/Degradado.png";
import logo from "../assets/logo.png";

export default function HeroBanner() {
    return (
        <>
            <section className="hero">
                {/* Imagen de fondo */}
                <div className="hero-bg-container">
                    <img
                        src={Banner}
                        alt="Estudiantes Colegio Arco Iris"
                        className="hero-bg"
                    />
                    <img
                        src={Degradado}
                        alt="Degradado color azul"
                        className="hero-degree"
                    />
                    {/* Overlay sutil para contraste */}
                    <div className="hero-overlay"></div>
                </div>

                {/* Contenido textual */}
                <div className="hero-content">
                    <img
                        src={logo}
                        alt="Logo Colegio Arco Iris"
                        className="hero-logo"
                    />
                    <h1>
                        Un <span className="violet">colegio</span> donde cada{" "}
                        <span className="orange">niño</span>{" "}
                    </h1>
                    <h1>
                        <span className="yellow">brilla</span> con su propio{" "}
                        <span className="red">color</span>
                    </h1>
                    <p>
                        En el Colegio Arco Iris cultivamos la curiosidad, la
                        empatía y el amor por el conocimiento.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contacto" className="btn btn-violet button-violet">
                            Inscríbete hoy
                        </Link>
                        <Link to="/nosotros" className="btn btn-outline btn-violet">
                            Conoce más de nosotros
                        </Link>
                    </div>
                </div>
            </section>

            {/* Nube decorativa al final del banner */}
            <img src={Nube} alt="Nubes decorativas" className="cloud" />
        </>
    );
}
