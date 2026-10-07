export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}) {
  return (
    <div
      className={`section-heading ${align === "center" ? "is-center" : ""} ${light ? "is-light" : ""}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-heading__text">{text}</p> : null}
    </div>
  )
}
