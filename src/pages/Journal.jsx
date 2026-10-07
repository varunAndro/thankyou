import { Link } from "react-router-dom"
import PageBanner from "../components/PageBanner"
import { articles } from "../data/content"

export default function Journal() {
  return (
    <>
      <PageBanner
        eyebrow="Journal"
        title="Notes for the moment before you choose."
        text="Practical writing about mixers, finishes and shower walls."
        image="/images/sink.jpg"
      />
      <section className="section">
        <div className="wrap journal-list">
          {articles.map((article) => (
            <Link key={article.slug} to={`/journal/${article.slug}`} className="journal-card journal-card--wide">
              <img src={article.image} alt="" />
              <div>
                <time dateTime={article.date}>{article.date}</time>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <span>Read the note</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
