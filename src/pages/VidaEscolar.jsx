import SectionTitle from "../components/SectionTitle"
import PageBanner from "../components/PageBanner"
import "./VidaEscolar.css"
import Degradado from "../assets/Degradado-violeta.png"
import bannerVida from "../assets/banner-vida.jpg"


// 🖼️ Importar imágenes
import sampedrito1 from "../assets/vida/sampedrito1.jpg"
import sampedrito2 from "../assets/vida/sampedrito2.jpg"
import sampedrito3 from "../assets/vida/sampedrito3.jpg"
import sampedrito4 from "../assets/vida/sampedrito4.jpg"
import sampedrito5 from "../assets/vida/sampedrito5.jpg"
import sampedrito6 from "../assets/vida/sampedrito6.jpg"

import clausura1 from "../assets/vida/clausura1.jpg"
import clausura2 from "../assets/vida/clausura2.jpg"
import clausura3 from "../assets/vida/clausura3.jpg"
import clausura4 from "../assets/vida/clausura4.jpg"
import clausura5 from "../assets/vida/clausura5.jpg"
import clausura6 from "../assets/vida/clausura6.jpg"

import cultural1 from "../assets/vida/cultural1.jpg"
import cultural2 from "../assets/vida/cultural2.jpg"
import cultural3 from "../assets/vida/cultural3.jpg"
import cultural4 from "../assets/vida/cultural4.jpg"
import cultural5 from "../assets/vida/cultural5.jpg"
import cultural6 from "../assets/vida/cultural6.jpg"

import fest1 from "../assets/vida/fest1.jpg"
import fest2 from "../assets/vida/fest2.jpg"
import fest3 from "../assets/vida/fest3.jpg"
import fest4 from "../assets/vida/fest4.jpg"

import jornadas1 from "../assets/vida/jornadas1.jpg"
import jornadas2 from "../assets/vida/jornadas2.jpg"

export default function VidaEscolar() {
    return (
        <main className="vida-escolar-pag">

            <PageBanner
                image={bannerVida}
                gradientImage={Degradado}
                title="La vida en el Colegio Arco Iris"
                subtitle="Aprendemos, celebramos y crecemos juntos."
                titleColor="#FFFFFF"
                subtitleColor="#FFEA56"
                objectPosition="top" // opcional: 'top', 'center', 'center 30%', etc.
            />

            {/* 🟣 SAMPEDRITO (texto izquierda → imágenes derecha) */}
            <section className="vida-section">
                <div className="vida-container">
                    <div className="vida-texto">
                        <SectionTitle
                            subtitle="Tradición y alegría"
                            title="Sampedrito"
                            subtitleColor="#FFA018"
                            titleColor="#A587CA"
                            align="left"
                        />
                        <p>
                            En el <strong>Sampedrito</strong>, nuestros estudiantes celebran las raíces culturales del Huila a través de la música, el baile y la alegría.
                            Este evento promueve el <strong>orgullo por nuestras tradiciones</strong> y fortalece la identidad regional con presentaciones coloridas y mucho folclor.
                        </p>
                    </div>

                    <div className="vida-imagenes-grid">
                        <img src={sampedrito1} alt="Sampedrito 1" />
                        <img src={sampedrito2} alt="Sampedrito 2" />
                        <img src={sampedrito3} alt="Sampedrito 3" />
                        <img src={sampedrito4} alt="Sampedrito 4" />
                        <img src={sampedrito5} alt="Sampedrito 5" />
                        <img src={sampedrito6} alt="Sampedrito 6" />
                    </div>
                </div>
            </section>

            {/* 💛 CLAUSURA (texto derecha → imágenes izquierda) */}
            <section className="vida-section bg-violet-light reverse">
                <div className="vida-container reverse">
                    <div className="vida-texto">
                        <SectionTitle
                            subtitle="Logros y emociones"
                            title="Clausura"
                            subtitleColor="#A587CA"
                            titleColor="#FFA018"
                            align="right"
                        />
                        <p>
                            En la <strong>Clausura</strong> celebramos los logros alcanzados durante el año escolar.
                            Es un espacio para reconocer el <strong>esfuerzo, la constancia y el crecimiento</strong> de cada estudiante, acompañado de presentaciones artísticas y momentos familiares.
                        </p>
                    </div>

                    <div className="vida-imagenes-grid">
                        <img src={clausura1} alt="Clausura 1" />
                        <img src={clausura2} alt="Clausura 2" />
                        <img src={clausura3} alt="Clausura 3" />
                        <img src={clausura4} alt="Clausura 4" />
                        <img src={clausura5} alt="Clausura 5" />
                        <img src={clausura6} alt="Clausura 6" />
                    </div>
                </div>
            </section>

            {/* 💜 SEMANA CULTURAL (texto izquierda → imágenes derecha → corregido) */}
            <section className="vida-section">
                <div className="vida-container">
                    <div className="vida-imagenes-grid">
                        <img src={cultural1} alt="Semana Cultural 1" />
                        <img src={cultural2} alt="Semana Cultural 2" />
                        <img src={cultural3} alt="Semana Cultural 3" />
                        <img src={cultural4} alt="Semana Cultural 4" />
                        <img src={cultural5} alt="Semana Cultural 5" />
                        <img src={cultural6} alt="Semana Cultural 6" />
                    </div>

                    <div className="vida-texto">
                        <SectionTitle
                            subtitle="Creatividad y expresión"
                            title="Semana Cultural"
                            subtitleColor="#FFA018"
                            titleColor="#A587CA"
                            align="left"
                        />
                        <p>
                            La <strong>Semana Cultural</strong> es un espacio donde los estudiantes demuestran sus talentos artísticos, científicos y deportivos.
                            Fomentamos el <strong>trabajo en equipo</strong> y el <strong>liderazgo</strong> en un ambiente lleno de arte, innovación y convivencia.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🎉 FESTIVIDADES (texto derecha → imágenes izquierda) */}
            <section className="vida-section bg-cyan-light reverse">
                <div className="vida-container reverse">
                    <div className="vida-texto">
                        <SectionTitle
                            subtitle="Alegría y unión"
                            title="Festividades"
                            subtitleColor="#A587CA"
                            titleColor="#FFA018"
                            align="right"
                        />
                        <p>
                            En cada <strong>festividad</strong>, el Colegio Arco Iris celebra la vida y la comunidad educativa.
                            Actividades como el <strong>Día del Niño</strong>, <strong>Halloween</strong>, <strong>Navidad</strong> y otras fechas especiales fomentan la unión, la diversión y los valores familiares.
                        </p>
                    </div>

                    <div className="vida-imagenes-grid">
                        <img src={fest1} alt="Festividad 1" />
                        <img src={fest2} alt="Festividad 2" />
                        <img src={fest3} alt="Festividad 3" />
                        <img src={fest4} alt="Festividad 4" />
                    </div>
                </div>
            </section>

            {/* 📘 JORNADAS PEDAGÓGICAS (texto izquierda → imágenes derecha → corregido) */}
            <section className="vida-section">
                <div className="vida-container">
                    <div className="vida-imagenes-grid">
                        <img src={jornadas1} alt="Jornadas 1" />
                        <img src={jornadas2} alt="Jornadas 2" />
                    </div>

                    <div className="vida-texto">
                        <SectionTitle
                            subtitle="Reflexión y crecimiento"
                            title="Jornadas Pedagógicas"
                            subtitleColor="#FFA018"
                            titleColor="#A587CA"
                            align="left"
                        />
                        <p>
                            Las <strong>jornadas pedagógicas</strong> son espacios de encuentro entre docentes para compartir estrategias, reflexionar sobre la práctica educativa y fortalecer el compromiso con la excelencia académica.
                        </p>
                    </div>
                </div>
            </section>

            <div className="vida-final">
                En el Colegio Arco Iris, cada actividad es una oportunidad para aprender, convivir y crecer juntos.
            </div>
        </main>
    )
}
