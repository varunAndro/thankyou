import { Link } from "react-router-dom"

export default function CategoryCard({ category, index }) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <Link to={`/products?category=${category.slug}`} className="category-card">
      <img src={category.image} alt="" />
      <span className="category-card__shade" />
      <span className="category-card__copy">
        <em>{number}</em>
        <strong>{category.name}</strong>
        <span>{category.text}</span>
      </span>
    </Link>
  )
}
