import "./global.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FastFacts from "./pages/FastFacts"
import History from "./pages/History"
import ArtMusic from "./pages/ArtMusic"
import Clothes from "./pages/Clothes"
import Culinary from "./pages/Culinary"
import House from "./pages/House"
import Tradition from "./pages/Tradition"
import Gallery from "./pages/Gallery"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fakta-singkat" element={<FastFacts />} />
        <Route path="/sejarah" element={<History />} />
        <Route path="/kesenian-dan-musik" element={<ArtMusic />} />
        <Route path="/pakaian-adat" element={<Clothes />} />
        <Route path="/kuliner" element={<Culinary />} />
        <Route path="/rumah-adat" element={<House />} />
        <Route path="/tradisi-dan-permainan" element={<Tradition />} />
        <Route path="/galeri" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
