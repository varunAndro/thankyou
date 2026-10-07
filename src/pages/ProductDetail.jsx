import { Link, useParams } from "react-router-dom"
import EnquiryForm from "../components/EnquiryForm"
import ProductCard from "../components/ProductCard"
import { finishColor, formatPrice, getCategory, getProduct, products } from "../data/content"
import NotFound from "./NotFound"

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <NotFound />

  const category = getCategory(product.category)
  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3)

  return (
    <article className="section product-detail">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`}>{category?.name}</Link>
        </p>

        <div className="detail-grid">
          <div className="detail-media">
            <img src={product.image} alt="" />
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{category?.name}</p>
            <h1>{product.name}</h1>
            <p className="detail-price">{formatPrice(product.price)}</p>
            <p className="detail-summary">{product.description}</p>

            <div className="detail-finishes">
              <span>Shown in {product.finish}</span>
              <ul>
                {product.finishes.map((finish) => (
                  <li key={finish}>
                    <i style={{ background: finishColor(finish) }} />
                    {finish}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="spec-list">
              {product.specs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="detail-enquiry">
          <div>
            <p className="eyebrow">Enquire</p>
            <h2>Ask about {product.name}</h2>
            <p>Tell us the city, the finish and whether this is for a home or a project.</p>
          </div>
          <EnquiryForm productName={product.name} />
        </div>

        {related.length ? (
          <div className="related">
            <h2>Also in {category?.name}</h2>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  )
}
