import { Link, useParams } from "react-router-dom"
import { articles, getArticle } from "../data/content"
import NotFound from "./NotFound"

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) return <NotFound />

  const more = articles.filter((item) => item.slug !== article.slug)

  return (
    <article className="section article">
      <div className="wrap article__wrap">
        <p className="crumbs">
          <Link to="/journal">Journal</Link>
          <span>/</span>
          <span>{article.title}</span>
        </p>
        <p className="eyebrow">{article.date}</p>
        <h1>{article.title}</h1>
        <img src={article.image} alt="" />
        <div className="prose">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="more-notes">
          <h2>More notes</h2>
          <ul>
            {more.map((item) => (
              <li key={item.slug}>
                <Link to={`/journal/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
