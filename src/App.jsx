import { Routes, Route } from "react-router-dom";

import SEO from "./components/SEO";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import Products from "./sections/Products";
import About from "./sections/About";
import Features from "./sections/Features";
import Footer from "./components/Footer";
import FortanGold from "./sections/FortanGold";
import AboutDetail from "./sections/AboutDetail";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-black text-white">
      <SEO />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <VideoHero />
              <Products />
              <About />
              <Features />
            </>
          }
        />

        <Route path="/product/fortan-gold" element={<FortanGold />} />
        <Route path="/about" element={<AboutDetail />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
