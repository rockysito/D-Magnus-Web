import { Routes, Route } from "react-router-dom";

import SEO from "./components/SEO";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./sections/Products";
import About from "./sections/About";
import Features from "./sections/Features";
import Footer from "./components/Footer";
import FortanGold from "./sections/FortanGold";
import AboutDetail from "./sections/AboutDetail";
import VideoHero from "./components/VideoHero";

function App() {
  return (
    <div className="bg-black text-white">
      <SEO />
      <ScrollProgress />
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
