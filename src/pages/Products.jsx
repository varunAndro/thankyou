import { useSearchParams } from "react-router-dom"
import PageBanner from "../components/PageBanner"
import ProductCard from "../components/ProductCard"
import { categories, filterProducts, spaces } from "../data/content"

export default function Products() {
  const [params, setParams] = useSearchParams()
  const category = params.get("category") || "all"
  const space = params.get("space") || "all"
  const items = filterProducts({ category, space })
  const activeCategory = categories.find((item) => item.slug === category)

  function setFilter(key, value) {
    const next = new URLSearchParams(params)
    if (value === "all") next.delete(key)
    else next.set(key, value)
    setParams(next)
  }

  return (
    <>
      <PageBanner
        eyebrow="Collection"
        title={activeCategory ? activeCategory.name : "All products"}
        text={
          activeCategory
            ? activeCategory.text
            : "Faucets, showers, sanitaryware, accessories and kitchen fittings."
        }
        image={activeCategory?.image || "/images/marble.jpg"}
      />

      <section className="section">
        <div className="wrap">
          <div className="filters" aria-label="Filter products">
            <div className="filter-row">
              <span>Category</span>
              <div className="chips">
                <Chip active={category === "all"} onClick={() => setFilter("category", "all")}>
                  All
                </Chip>
                {categories.map((item) => (
                  <Chip
                    key={item.slug}
                    active={category === item.slug}
                    onClick={() => setFilter("category", item.slug)}
                  >
                    {item.name}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="filter-row">
              <span>Space</span>
              <div className="chips">
                <Chip active={space === "all"} onClick={() => setFilter("space", "all")}>
                  All
                </Chip>
                {spaces.map((item) => (
                  <Chip
                    key={item.slug}
                    active={space === item.slug}
                    onClick={() => setFilter("space", item.slug)}
                  >
                    {item.name}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          <p className="result-count">
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </p>

          {items.length ? (
            <div className="product-grid">
              {items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>Nothing in this combination yet.</h2>
              <p>Try another category, or look across both rooms.</p>
              <button type="button" className="btn btn--ghost" onClick={() => setParams({})}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function Chip({ active, children, onClick }) {
  return (
    <button type="button" className={active ? "chip is-active" : "chip"} onClick={onClick}>
      {children}
    </button>
  )
}
