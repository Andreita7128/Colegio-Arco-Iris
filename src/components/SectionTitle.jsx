import "./SectionTitle.css";

export default function SectionTitle({
    subtitle,
    title,
    subtitleColor = "var(--color-cyan)",
    titleColor = "var(--color-green)",
    align = "left",
}) {
    return (
        <div className="section-title" style={{ textAlign: align }}>
            {subtitle && (
                <h3 className="section-subtitle" style={{ color: subtitleColor }}>
                    {subtitle}
                </h3>
            )}
            <h2 className="section-main" style={{ color: titleColor }}>
                {title}
            </h2>
        </div>
    );
}
