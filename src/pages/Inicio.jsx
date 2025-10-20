import { Link } from "react-router-dom"
import HeroBanner from "../components/HeroBanner"
import SectionTitle from "../components/SectionTitle"
import "./Inicio.css"

// Imágenes
import vida1 from "../assets/vida-escolar-1.jpg"
import vida2 from "../assets/vida-escolar-2.jpg"
import vida3 from "../assets/vida-escolar-3.jpg"
import vida4 from "../assets/vida-escolar-4.jpg"
import nosotrosImg from "../assets/inicio-nosotros.jpg"
import academiaImg from "../assets/academia-img.jpg"
import admisionesImg from "../assets/inicio-admisiones.jpg"
import NubeImg from "../assets/Nube.png"

export default function Inicio() {
    return (
        <main className="inicio">
            <HeroBanner />

            {/* SECCIÓN SOBRE NOSOTROS */}
            <section className="about">
                <div className="about-container">
                    <div className="about-text">
                        <SectionTitle
                            subtitle="Conoce al"
                            title="Colegio Arco Iris"
                            subtitleColor="#008C99"
                            titleColor="#7FE264"
                            align="left"
                        />
                        <div className="about-text-body">
                            <p>
                                Durante más de <span>30 años</span>, el <span>Colegio Arco Iris</span> ha acompañado a las familias neivanas en la formación de sus hijos con <span>amor, compromiso y alegría.</span> Promovemos una educación que va más allá del aula, inspirada en los valores de <span>respeto, libertad y convivencia pacífica,</span> mientras cultivamos en nuestros estudiantes el <span>amor por las tradiciones huilenses</span> y su entorno.
                            </p>
                            <p>
                                Seguimos siendo ese lugar donde cada niño <span>crece, aprende y brilla rodeado de color</span> y valores que perduran.
                            </p>
                        </div>
                    </div>

                    <div className="about-buttons">
                        <Link to="/contacto" className="btn btn-cyan btn-about">
                            Inscríbete
                        </Link>
                        <Link to="/nosotros" className="btn btn-outline btn-cyan btn-about">
                            Más información
                        </Link>
                    </div>
                </div>

                <div className="about-img">
                    <img
                        src={nosotrosImg}
                        alt="Celebración 35 años del Colegio Arco Iris"
                    />
                </div>
            </section>

            {/* SECCIÓN ACADEMIA */}
            <section className="academia">
                <div className="academia-img">
                    <img
                        src={academiaImg}
                        alt="Celebración 35 años del Colegio Arco Iris"
                    />
                </div>

                <div className="academia-text-container">
                    <SectionTitle
                        subtitle="Creemos en la educación con"
                        title="Amor, Valores y Propósito"
                        subtitleColor="#fe797b"
                        titleColor="#A587CA"
                        align="right"
                    />
                    <div className="academia-text-body">
                        <p>
                            En el Colegio Arco Iris creemos que aprender va más allá de los libros: es descubrir, crear y compartir. Nuestra propuesta educativa combina el desarrollo integral con el fortalecimiento del inglés desde la primera infancia, para formar niños curiosos, felices y seguros de sí mismos.
                        </p>
                        <Link to="/academia" className="btn btn-outline btn-red">
                            Descubre cómo aprendemos en Arco Iris
                        </Link>
                    </div>
                </div>
            </section>

            {/* VIDA ESCOLAR */}
            <section className="vida-escolar">
                <div className="container vida-escolar-content">
                    <div className="vida-escolar-text">
                        <SectionTitle
                            subtitle="Más allá del aula"
                            title="Experiencias que Inspiran"
                            subtitleColor="#FFE31D"
                            titleColor="#36CEDC"
                            align="left"
                        />
                        <p>
                            La vida escolar en Arco Iris va mucho más allá de lo académico:
                            talleres familiares, días culturales, ferias, proyectos en inglés y
                            actividades recreativas fortalecen el crecimiento integral de nuestros estudiantes.
                        </p>
                        <Link to="/vida-escolar" className="btn btn-violet">
                            Conoce cómo es la vida en Arco Iris
                        </Link>
                    </div>

                    <div className="vida-escolar-gallery">
                        <div className="img-grid">
                            <img src={vida1} alt="Niños celebrando el Día del Niño" />
                            <img src={vida2} alt="Estudiantes en el Sanpedrito con trajes típicos" />
                            <img src={vida3} alt="Proyecto Talking English con docentes y estudiantes" />
                            <img src={vida4} alt="Feria empresarial o día cultural en el colegio" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ADMISIONES */}
            <section className="admisiones">
                <div className="container">
                    <div className="admisiones-content">
                        <div className="admisiones-image">
                            <img src={admisionesImg} alt="Niña feliz coloreando" />
                        </div>

                        <div className="admisiones-text">
                            <SectionTitle
                                subtitle="Haz parte de nuestra familia"
                                title="Admisiones Abiertas"
                                subtitleColor="#FFA018"
                                titleColor="#36CEDC"
                                align="left"
                            />
                            <p>
                                En el Colegio Arco Iris recibimos con alegría a las familias que
                                buscan una educación integral, basada en valores, amor y aprendizaje
                                significativo. Abrimos cupos para preescolar y primaria,
                                calendario A, jornada única.
                            </p>
                            <Link to="/admisiones" className="btn btn-red">
                                Conoce el proceso de admisión
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="nube-container">
                <img src={NubeImg} alt="Decoración nube inferior" />
            </div>
        </main>
    )
}
