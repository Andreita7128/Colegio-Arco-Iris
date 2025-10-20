import PageBanner from "../components/PageBanner"
import Degradado from "../assets/Degradado-amarillo.png"
import BannerNosotros from "../assets/banner-nosotros.jpg"
import SectionTitle from "../components/SectionTitle"
import { useEffect } from "react";

import Docente1Img from "../assets/profe1.jpg"

import "./Nosotros.css"

// 📸 Importa tus imágenes aquí
import historiaImg from "../assets/historia-colegio.jpg"


export default function Nosotros() {
    // 👇 Este useEffect va justo antes del return
    useEffect(() => {
        const cards = document.querySelectorAll(".valor-card")

        const handleClick = (e) => {
            e.currentTarget.classList.toggle("flipped")
        }

        cards.forEach(card => card.addEventListener("click", handleClick))

        return () => {
            cards.forEach(card => card.removeEventListener("click", handleClick))
        }
    }, [])

    return (

        <main className="nosotros">

            {/* 🏫 Banner principal */}
            <PageBanner
                image={BannerNosotros}
                gradientImage={Degradado}
                subtitle="Conócenos"
                title="Nuestra Historia y Propósito"
                titleColor="#FFFFFF"
                subtitleColor="#FFEA56"
                objectPosition="top" // opcional: 'top', 'center', 'center 30%', etc.
            />

            {/* 📖 Nuestra Historia */}
            <section className="historia">
                <div className="historia-container">
                    {/* Texto */}
                    <div className="historia-text">
                        <SectionTitle
                            subtitle="Nuestra historia"
                            title="Más de tres décadas formando con amor y valores"
                            subtitleColor="#36CEDC"
                            titleColor="#8FE968"
                        />
                        <p>
                            El <span className="bold">Colegio Arco Iris</span> nació en <span className="bold">diciembre de 1990</span> en la ciudad de <span className="bold">Neiva</span> como el <span className="bold">Jardín Infantil Arco Iris</span>, fundado por la señora <span className="bold">Ángela Rocío Montealegre</span>. Con el tiempo, y bajo la dirección de las licenciadas <span className="bold">Martha Elizabeth</span> y <span className="bold">Claudia Patricia Torrente Díaz</span>, la institución amplió su alcance educativo, transformándose en un colegio comprometido con la <span className="bold">formación integral</span> de niños y niñas desde el nivel <span className="bold">preescolar</span> hasta la <span className="bold">educación básica primaria</span>.
                        </p>

                        <p>
                            A lo largo de su trayectoria, el colegio ha mantenido su <span className="bold">carácter mixto</span>, <span className="bold">calendario A</span> y <span className="bold">orientación católica</span>, consolidándose como una comunidad educativa que promueve el <span className="bold">respeto</span>, la <span className="bold">responsabilidad</span>, la <span className="bold">libertad</span> y la <span className="bold">convivencia pacífica</span>.
                        </p>

                        <p>
                            Hoy, el <span className="bold">Colegio Arco Iris</span> continúa siendo un espacio donde se cultivan <span className="bold">valores, conocimiento y amor por el aprendizaje</span>, impulsando el desarrollo humano y académico de sus estudiantes con el propósito de formar <span className="bold">ciudadanos autónomos, solidarios y comprometidos</span> con la construcción de una sociedad más justa.
                        </p>
                    </div>

                    {/* Imágenes */}
                    <div className="historia-gallery">
                        <div className="historia-img main">
                            <img src={historiaImg} alt="Estudiantes del Colegio Arco Iris en el aula" />
                        </div>
                        <div className="historia-subimages">
                            <img src={historiaImg} alt="Celebración escolar en el Colegio Arco Iris" />
                            <img src={historiaImg} alt="Actividades pedagógicas en el Colegio Arco Iris" />
                        </div>
                    </div>
                </div>
            </section>


            {/* 💫 Valores Institucionales */}
            <section className="valores">
                <div className="container">
                    <SectionTitle
                        subtitle="Nuestros pilares"
                        title="Valores que nos inspiran"
                        subtitleColor="#FFA018"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <div className="valores-grid">
                        {[
                            { color: "violet", title: "Respeto", desc: "Fomentamos un ambiente donde cada persona se siente valorada, escuchada y comprendida." },
                            { color: "cyan", title: "Responsabilidad", desc: "Promovemos el compromiso con las acciones, el estudio y la convivencia en comunidad." },
                            { color: "green", title: "Amor", desc: "Creemos en el poder del cariño, la empatía y la solidaridad para transformar el entorno." },
                            { color: "yellow", title: "Alegría", desc: "Vivimos cada aprendizaje con entusiasmo, creatividad y gratitud." },
                            { color: "orange", title: "Libertad", desc: "Formamos niños capaces de pensar, decidir y actuar con autonomía y respeto." },
                            { color: "red", title: "Convivencia", desc: "Construimos día a día una comunidad donde el diálogo y la paz son los caminos del encuentro." },
                        ].map((valor, i) => (
                            <div key={i} className={`valor-card ${valor.color}`} tabIndex="0">
                                <div className="valor-card-inner">
                                    <div className="valor-card-front">
                                        <h3>{valor.title}</h3>
                                    </div>
                                    <div className="valor-card-back">
                                        <p className="card-body">{valor.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 👩‍🏫 Equipo Humano */}
            <section className="docentes">
                <div className="container">
                    <SectionTitle
                        subtitle="Nuestro equipo"
                        title="Docentes que inspiran con el corazón"
                        subtitleColor="#36CEDC"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <div className="docentes-content">
                        <p>
                            En el <strong>Colegio Arco Iris</strong> creemos que <strong>educar es un acto de amor</strong>.
                            Por eso, nuestro equipo docente está formado por personas que <strong>enseñan con el alma</strong>,
                            acompañan con empatía y guían con el ejemplo. Cada maestro es parte esencial de esta gran familia
                            que, día a día, <strong>siembra valores</strong>, motiva el aprendizaje y promueve el respeto y la solidaridad en las aulas.
                        </p>
                        <p>
                            Nuestra misión no solo es enseñar, sino <strong>inspirar</strong>: formar niños y niñas que
                            aprendan a <strong>conocer, hacer, convivir y ser</strong>.
                        </p>
                    </div>

                    <div className="docentes-collage">
                        <img src={Docente1Img} alt="Docente 1" className="docente-img" />
                        <img src={Docente1Img} alt="Docente 2" className="docente-img" />
                        <img src={Docente1Img} alt="Docente 3" className="docente-img" />
                        <img src={Docente1Img} alt="Docente 4" className="docente-img" />
                        <img src={Docente1Img} alt="Docente 5" className="docente-img" />
                        <img src={Docente1Img} alt="Docente 6" className="docente-img" />
                    </div>
                </div>
            </section>


            {/* ✨ Frase final */}
            <section className="cierre">
                <h2>“En Arco Iris, cada niño aprende a brillar con su propio color.”</h2>
            </section>
        </main>
    )


}


