import { Link } from "react-router-dom"
import { asset } from "../asset"
import { brand, categories } from "../data/content"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={asset("/logo-lockup.jpg")} alt="Thankyou" />
          <p>
            Faucets, showers, sanitaryware and kitchen fittings, gathered as one finish family for
            the bathroom and the kitchen.
          </p>
        </div>

        <div>
          <h2>Products</h2>
          <ul>
            <li>
              <Link to="/products">All products</Link>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/products?category=${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="/about">About Thankyou</Link>
            </li>
            <li>
              <Link to="/spaces">Explore by space</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/contact?intent=dealer">Dealership</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Studio</h2>
          <ul>
            <li>Homeowner and dealer enquiries</li>
            <li>Catalogue on request</li>
            <li>Finish matching across a room</li>
            <li>
              <Link to="/contact">Write to the studio</Link>
            </li>
            <li>
              <a href={brand.instagram} target="_blank" rel="noreferrer">
                Instagram {brand.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Thankyou. All rights reserved.</p>
        <a href={brand.instagram} target="_blank" rel="noreferrer">
          Instagram {brand.instagramHandle}
        </a>
      </div>
    </footer>
  )
}
