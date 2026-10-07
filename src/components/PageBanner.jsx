import { asset } from "../asset"

export default function PageBanner({ eyebrow, title, text, image }) {
  return (
    <section className="page-banner">
      <img src={asset(image)} alt="" />
      <div className="page-banner__shade" />
      <div className="wrap page-banner__content">
        {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </div>
    </section>
  )
}
