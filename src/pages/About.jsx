import { Link } from "react-router-dom"
import { asset } from "../asset"
import PageBanner from "../components/PageBanner"
import { principles } from "../data/content"

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="Bathware, named for the feeling after a thing is well made."
        text="Thankyou is a collection of fittings for bathrooms and kitchens that are used every day."
        image="/images/tub.jpg"
      />

      <section className="section">
        <div className="wrap about-grid">
          <img className="about-logo" src={asset("/logo.jpg")} alt="Thankyou mark and wordmark" />
          <div className="prose">
            <p className="eyebrow">The name</p>
            <h2>A small word for a large amount of care.</h2>
            <p>
              Most bath fittings are chosen once and then handled thousands of times. The lever in
              the morning, the shower before leaving, the kitchen mixer with wet hands. Thankyou is
              built around that repetition.
            </p>
            <p>
              The collection covers bathroom faucets, showers, sanitaryware, accessories,
              thermostatic controls and kitchen mixers. Finishes are shared on purpose, so a
              brushed gold basin mixer can meet a brushed gold towel bar without a compromise.
            </p>
            <p>
              We would rather a shorter range that agrees with itself than a catalogue that asks
              you to mix three different ideas of gold.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="wrap principles">
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

      <section className="section">
        <div className="wrap promise">
          <div>
            <p className="eyebrow">After installation</p>
            <h2>The fitting is not finished when it leaves the box.</h2>
            <p>
              Bodies carry a long warranty. Seats, hoses and cartridges are named clearly, so a
              replacement is a part and not a puzzle. If you are specifying a project, write with
              the room list and we will answer with finishes that can actually be matched.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Write to the studio
            </Link>
          </div>
          <img src={asset("/images/marble.jpg")} alt="A white basin and wall-mounted mixer beside a freestanding bath" />
        </div>
      </section>
    </>
  )
}
