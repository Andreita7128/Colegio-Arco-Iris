import PageBanner from "../components/PageBanner"
import SectionTitle from "../components/SectionTitle"
import "./Contacto.css"

// 📸 Imagen del banner (puedes reemplazarla)

export default function Contacto() {
    return (
        <main className="contacto-page">
            {/* 🟣 Banner Principal */}


            {/* 📍 Información de contacto */}
            <section className="contact-info container">
                <SectionTitle
                    subtitle="Comunícate con nosotros"
                    title="Información de Contacto"
                    subtitleColor="#FFA018"
                    titleColor="#36CEDC"
                    align="center"
                />

                <div className="info-grid">
                    <div className="info-card">
                        <h3>📍 Dirección</h3>
                        <p>Cl. 37 # 1C-10, Neiva - Huila, Colombia</p>
                    </div>

                    <div className="info-card">
                        <h3>📞 Teléfonos</h3>
                        <p>+57 (608) 871 2345</p>
                        <p>+57 310 456 7890</p>
                    </div>

                    <div className="info-card">
                        <h3>✉️ Correo electrónico</h3>
                        <p>colegioarcoirisneiva@gmail.com</p>
                    </div>

                    <div className="info-card">
                        <h3>🕐 Horario de atención</h3>
                        <p>Lunes a Viernes: 7:00 a.m. – 4:00 p.m.</p>
                        <p>Sábados: 8:00 a.m. – 12:00 p.m.</p>
                    </div>
                </div>
            </section>

            {/* 🗺️ Mapa */}
            <section className="map-section">
                <div className="container">
                    <iframe
                        title="Ubicación Colegio Arco Iris"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.826789426687!2d-75.2818892852463!3d2.9273115978704115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74661d6f1df5%3A0xbcb5dbb25cc18f59!2sNeiva%2C%20Huila%2C%20Colombia!5e0!3m2!1ses!2sco!4v1692214133204!5m2!1ses!2sco"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* 📬 Formulario */}
            <section className="contact-form">
                <div className="container">
                    <SectionTitle
                        subtitle="Escríbenos"
                        title="Formulario de Contacto"
                        subtitleColor="#FFA018"
                        titleColor="#A587CA"
                        align="center"
                    />

                    <form className="formulario">
                        <div className="form-group">
                            <label>Nombre completo</label>
                            <input type="text" placeholder="Escribe tu nombre completo" required />
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" placeholder="correo@ejemplo.com" required />
                        </div>

                        <div className="form-group">
                            <label>Teléfono de contacto</label>
                            <input type="tel" placeholder="Número de contacto" required />
                        </div>

                        <div className="form-group full">
                            <label>Mensaje</label>
                            <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
                        </div>

                        <button type="submit" className="btn btn-cyan">Enviar mensaje</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
