import { useMemo, useState } from "react"

const empty = {
  name: "",
  phone: "",
  email: "",
  city: "",
  role: "Homeowner",
  message: "",
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please add your name."
  const digits = values.phone.replace(/\D/g, "")
  if (digits.length < 10) errors.phone = "Please add a phone number we can reach."
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email does not look complete."
  }
  if (!values.city.trim()) errors.city = "Please add your city."
  if (!values.message.trim()) errors.message = "Tell us a little about what you need."
  return errors
}

export default function EnquiryForm({ productName = "", intent = "" }) {
  const startingMessage = useMemo(() => {
    if (productName) return `I would like details and a finish suggestion for ${productName}.`
    if (intent === "catalogue") return "Please share the Thankyou catalogue."
    if (intent === "dealer") return "I would like to enquire about a dealership."
    return ""
  }, [productName, intent])

  const [values, setValues] = useState({
    ...empty,
    role: intent === "dealer" ? "Dealer" : "Homeowner",
    message: startingMessage,
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">Received</p>
        <h3>We have your note{values.name ? `, ${values.name.split(" ")[0]}` : ""}.</h3>
        <p>
          A specialist can reply about {productName || "your bathroom or kitchen"} once this form
          is connected to the studio inbox. This preview keeps the enquiry on the page.
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setSent(false)
            setValues({ ...empty, message: startingMessage })
          }}
        >
          Send another note
        </button>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={onSubmit} noValidate>
      <div className="segmented" role="group" aria-label="I am a">
        {["Homeowner", "Dealer"].map((role) => (
          <button
            key={role}
            type="button"
            className={values.role === role ? "is-selected" : ""}
            aria-pressed={values.role === role}
            onClick={() => setValues((current) => ({ ...current, role }))}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="form-grid">
        <Field label="Name" name="name" value={values.name} error={errors.name} onChange={update} />
        <Field label="Phone" name="phone" value={values.phone} error={errors.phone} onChange={update} />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={update}
          optional
        />
        <Field label="City" name="city" value={values.city} error={errors.city} onChange={update} />
      </div>

      <label className="field field--full">
        <span>
          Message <i>Required</i>
        </span>
        <textarea name="message" rows="5" value={values.message} onChange={update} />
        {errors.message ? <small>{errors.message}</small> : null}
      </label>

      <button className="btn btn--primary" type="submit">
        Send enquiry
      </button>
    </form>
  )
}

function Field({ label, name, value, onChange, error, type = "text", optional = false }) {
  return (
    <label className="field">
      <span>
        {label} {optional ? <i>Optional</i> : <i>Required</i>}
      </span>
      <input name={name} type={type} value={value} onChange={onChange} autoComplete={name} />
      {error ? <small>{error}</small> : null}
    </label>
  )
}
