import { Link } from "react-router-dom"
import { asset } from "../asset"
import Button from "../components/Button"
import CategoryCard from "../components/CategoryCard"
import ProductCard from "../components/ProductCard"
import SectionHeading from "../components/SectionHeading"
import {
  articles,
  categories,
  finishes,
  getProduct,
  principles,
  spaces,
} from "../data/content"

const featured = [
  "aureum-basin-mixer",
  "haven-rain-shower",
  "forma-wall-hung",
  "grove-sink-mixer",
].map((slug) => getProduct(slug))

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img
            src={asset("/images/b1.jpg")}
            alt="A dark stone bathroom with a freestanding bath, rain shower and twin basins"
          />
          <div className="hero__shade" />
        </div>
        <div className="wrap hero__content">
          <img className="hero__mark" src={asset("/logo-mark.jpg")} alt="" />
          <p className="eyebrow eyebrow--light">Bathware</p>
          <h1>Everyday rituals, finished with care.</h1>
          <p className="hero__lead">
            Thankyou makes faucets, showers and fittings that feel steady in the hand and quiet in
            the room.
          </p>
          <div className="hero__actions">
            <Button to="/products" variant="light">
              Explore the collection
            </Button>
            <Button to="/spaces" variant="line">
              Explore by space
            </Button>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="wrap intro__grid">
          <img src={asset("/logo-lockup.jpg")} alt="Thankyou logo" />
          <div>
            <SectionHeading
              eyebrow="The house"
              title="One finish family for the bath and the kitchen."
              text="Specify a room once. Chrome, brushed gold, matte black and antique brass carry across mixers, showers and the smaller pieces beside them."
            />
            <Button to="/about" variant="ghost">
              About Thankyou
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="wrap">
          <SectionHeading
            eyebrow="Collection"
            title="Explore by category"
            text="The pieces a home actually asks for, grouped the way a specifier looks for them."
          />
          <div className="category-grid">
            {categories.map((category, index) => (
              <CategoryCard key={category.slug} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split-heading">
            <SectionHeading
              eyebrow="In the range"
              title="Pieces people reach for every day."
              text="A short edit from the collection. Prices are for the finish shown."
            />
            <Button to="/products" variant="ghost">
              View all products
            </Button>
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap space-split">
          {spaces.map((space) => (
            <Link key={space.slug} to={`/spaces/${space.slug}`} className="space-panel">
              <img src={asset(space.image)} alt="" />
              <span className="space-panel__shade" />
              <span className="space-panel__copy">
                <em>Explore by space</em>
                <strong>{space.name}</strong>
                <span>{space.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap principles">
          <SectionHeading
            eyebrow="How we work"
            title="Made to be lived with, then looked after."
          />
          <div className="principle-grid">
            {principles.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap finishes">
          <SectionHeading
            light
            eyebrow="Finishes"
            title="Four metals. One room."
            text="Choose a finish and keep it consistent from the basin to the towel bar."
          />
          <ul className="finish-list">
            {finishes.map((finish) => (
              <li key={finish.name}>
                <i style={{ background: finish.color }} />
                <span>{finish.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split-heading">
            <SectionHeading
              eyebrow="Journal"
              title="Notes before the tiles go on."
              text="Short guides for choosing a mixer, a finish and a shower wall."
            />
            <Button to="/journal" variant="ghost">
              All notes
            </Button>
          </div>
          <div className="journal-grid">
            {articles.map((article) => (
              <Link key={article.slug} to={`/journal/${article.slug}`} className="journal-card">
                <img src={asset(article.image)} alt="" />
                <div>
                  <time dateTime={article.date}>{article.date}</time>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-band__inner">
          <div>
            <p className="eyebrow">Studio</p>
            <h2>Tell us the room. We will help you specify it.</h2>
          </div>
          <div className="hero__actions">
            <Button to="/contact" variant="primary">
              Start an enquiry
            </Button>
            <Button to="/contact?intent=catalogue" variant="ghost">
              Request a catalogue
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
