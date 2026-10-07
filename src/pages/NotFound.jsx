import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page is not in the collection.</h1>
        <p>The link may be old. The products are still here.</p>
        <Link to="/" className="btn btn--primary">
          Back to Thankyou
        </Link>
      </div>
    </section>
  )
}
