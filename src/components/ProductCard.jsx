import { Link } from "react-router-dom"
import { asset } from "../asset"
import { finishColor, formatPrice, getCategory } from "../data/content"

export default function ProductCard({ product }) {
  const category = getCategory(product.category)

  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card__link">
        <div className="product-card__media">
          <img src={asset(product.image)} alt="" />
          <span className="product-card__finish">{product.finish}</span>
        </div>
        <div className="product-card__body">
          <p className="product-card__category">{category?.name}</p>
          <h3>{product.name}</h3>
          <p className="product-card__summary">{product.summary}</p>
          <div className="product-card__meta">
            <span className="product-card__price">{formatPrice(product.price)}</span>
            <span className="finish-dots" aria-label={`Available in ${product.finishes.join(", ")}`}>
              {product.finishes.map((finish) => (
                <i
                  key={finish}
                  style={{ background: finishColor(finish) }}
                  title={finish}
                />
              ))}
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
