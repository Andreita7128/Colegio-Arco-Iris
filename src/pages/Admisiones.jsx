import PageBanner from "../components/PageBanner"
import SectionTitle from "../components/SectionTitle"
import Degradado from "../assets/Degradado-verde.png"

import "./Admisiones.css"

// 📸 Imagen del banner (ajústala según tu carpeta)
import AdmisionesBanner from "../assets/banner-admisiones.jpg"

export default function Admisiones() {
    return (
        <main className="admisiones-page">
            {/* 🟣 Banner Principal */}
            <PageBanner
                image={AdmisionesBanner}
                gradientImage={Degradado}
                title="Inscripciones Abiertas"
                titleColor="#fff"
                subtitleColor="#A86300"
                objectPosition="top" // opcional: 'top', 'center', 'center 30%', etc.
            />

            {/* 💬 Introducción */}
            <section className="admisiones-intro container">
                <p>
                    En el <strong>Colegio Arco Iris</strong> recibimos con alegría a las familias que
                    buscan una educación integral basada en el <strong>amor, los valores y el aprendizaje
                        significativo</strong>. Abrimos cupos para preescolar y primaria, en calendario A y
                    jornada única.
                </p>
            </section>

            {/* 📋 Requisitos */}
            <section className="admisiones-requisitos">
                <div className="container">
                    <SectionTitle
                        subtitle="Prepárate para un nuevo comienzo"
                        title="Requisitos de Admisión"
                        subtitleColor="#FFA018"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <ul className="requisitos-list">
                        <li>📄 Registro civil de nacimiento del estudiante.</li>
                        <li>💉 Fotocopia del carné de vacunas actualizado.</li>
                        <li>🧾 Documento de identidad del acudiente.</li>
                        <li>📚 Certificado de notas (si aplica).</li>
                        <li>🪪 Paz y salvo del colegio anterior (si aplica).</li>
                    </ul>
                </div>
            </section>

            {/* 🪜 Proceso de inscripción */}
            <section className="admisiones-proceso bg-violet-light">
                <div className="container">
                    <SectionTitle
                        subtitle="Paso a paso"
                        title="Proceso de Admisión"
                        subtitleColor="#36CEDC"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <div className="proceso-grid">
                        {[
                            {
                                num: "1",
                                title: "Solicitud de información",
                                desc: "Completa el formulario de preinscripción o comunícate con nosotros.",
                            },
                            {
                                num: "2",
                                title: "Entrevista familiar",
                                desc: "Agenda una entrevista con dirección o coordinación académica.",
                            },
                            {
                                num: "3",
                                title: "Entrega de documentos",
                                desc: "Adjunta los requisitos solicitados según el nivel educativo.",
                            },
                            {
                                num: "4",
                                title: "Confirmación de cupo",
                                desc: "Recibe la notificación de admisión y separa el cupo de tu hijo(a).",
                            },
                            {
                                num: "5",
                                title: "Matrícula oficial",
                                desc: "Formaliza el proceso y únete a nuestra gran familia Arco Iris.",
                            },
                        ].map((step, i) => (
                            <div key={i} className="proceso-card">
                                <div className="proceso-num">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📝 Formulario de preinscripción */}
            <section className="admisiones-form">
                <div className="container">
                    <SectionTitle
                        subtitle="Comienza tu proceso"
                        title="Formulario de Preinscripción"
                        subtitleColor="#FFA018"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <form className="formulario">
                        <div className="form-group">
                            <label>Nombre del estudiante</label>
                            <input type="text" placeholder="Escribe el nombre completo" required />
                        </div>

                        <div className="form-group">
                            <label>Grado al que aspira</label>
                            <input type="text" placeholder="Ejemplo: Jardín, Transición, Primero..." required />
                        </div>

                        <div className="form-group">
                            <label>Nombre del acudiente</label>
                            <input type="text" placeholder="Nombre del padre, madre o acudiente" required />
                        </div>

                        <div className="form-group">
                            <label>Teléfono de contacto</label>
                            <input type="tel" placeholder="Número de contacto" required />
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" placeholder="correo@ejemplo.com" required />
                        </div>

                        <div className="form-group full">
                            <label>Mensaje adicional</label>
                            <textarea placeholder="Escribe tu mensaje aquí..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-violet">Enviar solicitud</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
