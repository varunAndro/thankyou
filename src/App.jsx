import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Article from "./pages/Article"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Journal from "./pages/Journal"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"
import Products from "./pages/Products"
import Spaces from "./pages/Spaces"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "")

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/spaces/:slug" element={<Spaces />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
