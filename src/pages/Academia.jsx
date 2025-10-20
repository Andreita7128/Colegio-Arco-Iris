import PageBanner from "../components/PageBanner"
import SectionTitle from "../components/SectionTitle"
import Degradado from "../assets/Degradado-rojo.png"
import "./Academia.css"

// 🖼️ Imágenes de apoyo (ajusta nombres y rutas según tus archivos)
import bannerAcademia from "../assets/banner-academia.jpg"
import montessoriImg from "../assets/montessori.jpg"
import tradicionalImg from "../assets/tradicional.jpg"
import inglesImg from "../assets/proyecto-ingles.jpg"
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
                                Favorece la independencia y el aprendizaje activo mediante
                                materiales sensoriales, exploración y libertad guiada.
                            </p>
                        </div>

                        <div className="modelo-card cyan">
                            <img src={tradicionalImg} alt="Enseñanza tradicional" />
                            <h3>Enfoque Tradicional</h3>
                            <p>
                                Acompañamiento docente constante, formación sólida en valores y
                                fortalecimiento de las competencias básicas.
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
                            "Lengua Castellana",
                            "Matemáticas",
                            "Ciencias Naturales",
                            "Ciencias Sociales",
                            "Inglés",
                            "Educación Artística",
                            "Educación Física",
                            "Formación en Valores",
                        ].map((area, i) => (
                            <div key={i} className="area-card">
                                <h4>{area}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🇬🇧 Proyecto de Inglés */}
            <section className="proyecto-ingles">
                <div className="container proyecto-flex">
                    <div className="proyecto-text">
                        <SectionTitle
                            subtitle="Proyecto Institucional"
                            title="Talking English"
                            subtitleColor="#146D75"
                            titleColor="#FE797B"
                            align="left"
                        />
                        <p>
                            Desde los primeros grados, nuestros estudiantes fortalecen el idioma
                            inglés a través del proyecto <strong>“Talking English”</strong>, una
                            propuesta lúdica y comunicativa que promueve la oralidad, la
                            creatividad y la confianza al hablar.
                        </p>
                        <p>
                            Con dramatizaciones, canciones, ferias temáticas y juegos, el inglés se
                            convierte en una herramienta viva que conecta con su entorno y cultura.
                        </p>
                    </div>
                    <div className="proyecto-img">
                        <img src={inglesImg} alt="Proyecto Talking English" />
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
                    <a href="/contacto" className="btn btn-violet">
                        Contáctanos
                    </a>
                </div>
            </section>
        </main>
    )
}
