import PageBanner from "../components/PageBanner"
import SectionTitle from "../components/SectionTitle"
import Degradado from "../assets/Degradado-rojo.png"
import "./Academia.css"

// 🖼️ Imágenes de apoyo (ajusta nombres y rutas según tus archivos)
import bannerAcademia from "../assets/banner-academia.jpg"
import montessoriImg from "../assets/montessori.jpg"
import tradicionalImg from "../assets/tradicional.jpg"
import integralImg from "../assets/educacion-integral.jpg"

export default function Academia() {
    return (
        <main className="academia-page">
            {/* 🌈 Banner principal */}
            <PageBanner
                image={bannerAcademia}
                gradientImage={Degradado}
                subtitle="Formamos mentes curiosas"
                title="Aprender con Amor, Valores y Propósito"
                titleColor="#FFFFFF"
                subtitleColor="#FFEA56"
                objectPosition="top" // opcional: 'top', 'center', 'center 30%', etc.
            />

            {/* 📘 Modelo pedagógico */}
            <section className="modelo-pedagogico">
                <div className="container">
                    <SectionTitle
                        subtitle="Nuestro enfoque"
                        title="Modelo Educativo"
                        subtitleColor="#FFA018"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <p className="intro">
                        En el <strong>Colegio Arco Iris</strong> integramos los aportes de la{" "}
                        <strong>enseñanza tradicional</strong> con los principios del{" "}
                        <strong>método Montessori</strong>, formando estudiantes autónomos,
                        creativos y responsables. Nuestra misión es brindar una educación con{" "}
                        <strong>estructura, amor y propósito</strong>.
                    </p>

                    <div className="modelo-grid">
                        <div className="modelo-card violet">
                            <img src={montessoriImg} alt="Método Montessori en el aula" />
                            <h3>Método Montessori</h3>
                            <p>
                                Fomentamos el aprendizaje activo, el descubrimiento y la autoexpresión. Cada
                                niño y niña aprende a su propio ritmo, explorando su entorno con curiosidad y
                                desarrollando la autonomía y la toma de decisiones responsables.
                            </p>
                        </div>

                        <div className="modelo-card cyan">
                            <img src={tradicionalImg} alt="Enseñanza tradicional" />
                            <h3>Enfoque Tradicional</h3>
                            <p>
                                Fortalecemos los procesos académicos con disciplina, acompañamiento
                                constante y desarrollo del pensamiento crítico. Nos gusta promover la excelencia
                                a través del compromiso, el trabajo y la constancia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🧩 Áreas de formación */}
            <section className="areas-formacion">
                <div className="container">
                    <SectionTitle
                        subtitle="Formamos desde el corazón y la mente"
                        title="Áreas de Formación"
                        subtitleColor="#8FE968"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <div className="areas-grid">
                        {[
                            { name: "Lengua Castellana", color: "violet" },
                            { name: "Matemáticas", color: "cyan" },
                            { name: "Ciencias Naturales", color: "green" },
                            { name: "Ciencias Sociales", color: "yellow" },
                            { name: "Inglés", color: "orange" },
                            { name: "Educación Artística", color: "red" },
                            { name: "Educación Física", color: "cyan-dark" },
                            { name: "Formación en Valores", color: "violet-dark" },
                        ].map((area, i) => (
                            <div key={i} className={`area-card ${area.color}`}>
                                <h4>{area.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 🇬🇧 PROYECTO TALKING ENGLISH */}
            <section className="talking-english">
                <div className="container talking-layout">
                    {/* 🧠 Texto e introducción */}
                    <div className="talking-text">
                        <SectionTitle
                            subtitle="Proyecto Institucional"
                            title="Talking English"
                            subtitleColor="#146D75"
                            titleColor="#FE797B"
                            align="left"
                        />

                        <p>
                            El <strong>Proyecto Talking English</strong> es una iniciativa que impulsa el
                            <strong> aprendizaje del inglés desde la primera infancia</strong>, fortaleciendo las
                            cuatro habilidades comunicativas: <strong>listening, speaking, reading y writing.</strong>
                        </p>
                        <p>
                            A través de una <strong>metodología lúdico–pedagógica</strong>, los estudiantes aprenden
                            de manera <strong>activa y significativa</strong>, incorporando el idioma en su vida cotidiana
                            mediante <strong>canciones, juegos, dramatizaciones y actividades culturales</strong> como el
                            <em> English Day</em>, <em> Family Day</em> o el <em> Christmas Show.</em>
                        </p>
                        <p>
                            Este programa cuenta con la guía de <strong>docentes especializados y personal nativo</strong>,
                            quienes garantizan una <strong>pronunciación natural</strong>, una
                            <strong> comprensión auditiva sólida</strong> y una
                            <strong> experiencia de aprendizaje inmersiva.</strong>
                        </p>
                        <p>
                            Así, el <strong>Colegio Arco Iris</strong> fomenta en sus estudiantes la
                            <strong> confianza para comunicarse en un segundo idioma</strong> y amplía sus
                            <strong> oportunidades en un mundo cada vez más global.</strong>
                        </p>
                    </div>

                    {/* 📸 Galería de imágenes */}
                    <div className="talking-gallery">
                        <img src="/src/assets/talking1.jpg" alt="Niños en clase de inglés con juegos" />
                        <img src="/src/assets/talking2.jpg" alt="Actividad English Day con presentaciones" />
                        <img src="/src/assets/talking3.jpg" alt="Docente nativa interactuando con estudiantes" />
                        <img src="/src/assets/talking4.jpg" alt="Family Day en el proyecto Talking English" />
                        <img src="/src/assets/talking5.jpg" alt="Dramatización en inglés en el aula" />
                        <img src="/src/assets/talking6.jpg" alt="Estudiantes presentando el Christmas Show" />
                    </div>
                </div>
            </section>

            {/* 🌟 Educación integral */}
            <section className="educacion-integral">
                <div className="container integral-flex">
                    <img src={integralImg} alt="Educación integral Arco Iris" />
                    <div className="integral-text">
                        <SectionTitle
                            subtitle="Más que conocimiento"
                            title="Educamos para la vida"
                            subtitleColor="#FFA018"
                            titleColor="#36CEDC"
                            align="left"
                        />
                        <p>
                            En el Colegio Arco Iris promovemos el desarrollo humano y espiritual
                            junto al académico. Fomentamos la empatía, la solidaridad y la
                            convivencia pacífica como pilares del crecimiento integral.
                        </p>
                        <blockquote>
                            “Formar con amor, acompañar con empatía y educar con propósito.”
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* 📩 CTA final */}
            <section className="cta-final">
                <div className="container">
                    <h2>¿Quieres conocer más sobre nuestra propuesta educativa?</h2>
                    <a href="/contacto" className="btn btn-red">
                        Contáctanos
                    </a>
                </div>
            </section>
        </main>
    )
}
