import { Link, useParams } from "react-router-dom"
import PageBanner from "../components/PageBanner"
import ProductCard from "../components/ProductCard"
import { filterProducts, spaces } from "../data/content"
import NotFound from "./NotFound"

export default function Spaces() {
  const { slug } = useParams()
  const space = spaces.find((item) => item.slug === slug)

  if (slug && !space) return <NotFound />

  if (!space) {
    return (
      <>
        <PageBanner
          eyebrow="Spaces"
          title="Rooms the collection is made for."
          text="Begin with the bathroom or the kitchen, then choose the fittings that belong there."
          image="/images/marble.jpg"
        />
        <section className="section">
          <div className="wrap space-split">
            {spaces.map((item) => (
              <Link key={item.slug} to={`/spaces/${item.slug}`} className="space-panel">
                <img src={item.image} alt="" />
                <span className="space-panel__shade" />
                <span className="space-panel__copy">
                  <em>Explore</em>
                  <strong>{item.name}</strong>
                  <span>{item.text}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </>
    )
  }

  const items = filterProducts({ space: space.slug })

  return (
    <>
      <PageBanner eyebrow="Space" title={space.name} text={space.text} image={space.image} />
      <section className="section">
        <div className="wrap">
          <div className="space-switch">
            {spaces.map((item) => (
              <Link
                key={item.slug}
                to={`/spaces/${item.slug}`}
                className={item.slug === space.slug ? "is-active" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="product-grid">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
