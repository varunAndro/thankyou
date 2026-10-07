import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { brand, categories, spaces } from "../data/content"
import Button from "./Button"

export default function Header() {
  const location = useLocation()
  const headerRef = useRef(null)
  const [drawer, setDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState("")

  useEffect(() => {
    const header = headerRef.current
    if (!header) return undefined

    const measure = () => {
      document.documentElement.style.setProperty("--header", `${header.offsetHeight}px`)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setDrawer(false)
    setOpenMenu("")
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.classList.toggle("nav-open", drawer)
    return () => document.body.classList.remove("nav-open")
  }, [drawer])

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setDrawer(false)
        setOpenMenu("")
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function toggleMenu(name) {
    setOpenMenu((current) => (current === name ? "" : name))
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="utility">
        <div className="wrap utility__inner">
          <p>Bath fittings for rooms that are used every day.</p>
          <div className="utility__links">
            <a href={brand.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <Link to="/contact?intent=dealer">Dealer enquiry</Link>
            <Link to="/contact?intent=catalogue">Request a catalogue</Link>
          </div>
        </div>
      </div>

      <div className="wrap header-bar">
        <Link to="/" className="brand" aria-label="Thankyou home">
          <img src="/logo-lockup.jpg" alt="Thankyou" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={drawer}
          aria-controls="site-nav"
          onClick={() => setDrawer((open) => !open)}
        >
          <span className="sr-only">{drawer ? "Close menu" : "Open menu"}</span>
          <i />
          <i />
        </button>

        <nav id="site-nav" className={drawer ? "site-nav is-open" : "site-nav"}>
          <Menu
            label="Products"
            open={openMenu === "products"}
            onToggle={() => toggleMenu("products")}
          >
            <Link to="/products">All products</Link>
            {categories.map((category) => (
              <Link key={category.slug} to={`/products?category=${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </Menu>

          <Menu label="Spaces" open={openMenu === "spaces"} onToggle={() => toggleMenu("spaces")}>
            <Link to="/spaces">All spaces</Link>
            {spaces.map((space) => (
              <Link key={space.slug} to={`/spaces/${space.slug}`}>
                {space.name}
              </Link>
            ))}
          </Menu>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            About
          </NavLink>
          <NavLink to="/journal" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Journal
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Contact
          </NavLink>

          <Button to="/contact" variant="primary" className="header-cta">
            Enquire
          </Button>
        </nav>
      </div>
    </header>
  )
}

function Menu({ label, open, onToggle, children }) {
  return (
    <div className={open ? "menu is-open" : "menu"}>
      <button type="button" className="menu__trigger" aria-expanded={open} onClick={onToggle}>
        {label}
        <svg viewBox="0 0 12 8" aria-hidden="true">
          <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      <div className="menu__list">{children}</div>
    </div>
  )
}
