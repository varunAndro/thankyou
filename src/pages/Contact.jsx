import { useSearchParams } from "react-router-dom"
import EnquiryForm from "../components/EnquiryForm"
import PageBanner from "../components/PageBanner"
import { brand } from "../data/content"

const steps = [
  {
    title: "Tell us the room",
    text: "A homeowner note or a dealer enquiry. City, finish and what you are planning is enough to begin.",
  },
  {
    title: "We reply with a short specification",
    text: "Matching pieces, the finish that will hold up, and anything that should be decided before tiling.",
  },
  {
    title: "You meet the product locally",
    text: "Through a dealer in your city, so the mixer can be seen before it is installed.",
  },
]

export default function Contact() {
  const [params] = useSearchParams()
  const intent = params.get("intent") || ""
  const titles = {
    dealer: "Dealership enquiry",
    catalogue: "Request a catalogue",
  }

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title={titles[intent] || "Write to the studio"}
        text="Homeowners, architects and dealers. Send a note and we will answer with the pieces that fit the room."
        image="/images/b3.jpg"
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h2>{step.title}</h2>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="contact-social">
              New pieces and room photographs are on{" "}
              <a href={brand.instagram} target="_blank" rel="noreferrer">
                Instagram {brand.instagramHandle}
              </a>
              .
            </p>
          </div>
          <div className="contact-card">
            <h2>Enquiry</h2>
            <EnquiryForm intent={intent} />
          </div>
        </div>
      </section>
    </>
  )
}
