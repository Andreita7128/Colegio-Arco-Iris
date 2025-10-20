import "./PageBanner.css";

export default function PageBanner({
    image,
    gradientImage = null,    // imagen de degradado opcional
    title,
    subtitle,
    titleColor = "#FFFFFF",
    subtitleColor = "#FFEA56",
    objectPosition = "top"   // puedes pasarlo si quieres otra posición
}) {
    return (
        <section className="page-banner">
            {/* Fondo y capas superpuestas */}
            <div className="banner-bg-container">
                <img
                    src={image}
                    alt={title || "Banner"}
                    className="banner-bg"
                    style={{ objectPosition }}
                />

                {gradientImage && (
                    <img
                        src={gradientImage}
                        alt="Degradado"
                        className="banner-gradient"
                    />
                )}

                {/* Capa de overlay oscuro para mejorar legibilidad */}
                <div className="banner-overlay" />
            </div>

            {/* Contenido */}
            <div className="banner-content">
                {subtitle && (
                    <h3
                        className="banner-subtitle"
                        style={{ color: subtitleColor }}
                    >
                        {subtitle}
                    </h3>
                )}
                {title && (
                    <h1
                        className="banner-title"
                        style={{ color: titleColor }}
                    >
                        {title}
                    </h1>
                )}
            </div>
        </section>
    );
}
