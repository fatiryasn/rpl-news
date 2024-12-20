import { Route, Routes } from "react-router-dom";

import "./global.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

//batak-mandailing
import BmHome from "./pages/batak-mandailing/BmHome";
import FastFacts from "./pages/batak-mandailing/FastFacts";
import History from "./pages/batak-mandailing/History";
import ArtMusic from "./pages/batak-mandailing/ArtMusic";
import Clothes from "./pages/batak-mandailing/Clothes";
import Culinary from "./pages/batak-mandailing/Culinary";
import House from "./pages/batak-mandailing/House";
import Tradition from "./pages/batak-mandailing/Tradition";
import Gallery from "./pages/batak-mandailing/Gallery";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* batak-mandailing */}
          <Route path="/batak-mandailing" element={<BmHome />} />
          <Route path="/batak-mandailing/fakta-singkat"element={<FastFacts />}/>
          <Route path="/batak-mandailing/sejarah" element={<History />} />
          <Route path="/batak-mandailing/kesenian-dan-musik" element={<ArtMusic />}/>
          <Route path="/batak-mandailing/pakaian-adat" element={<Clothes />} />
          <Route path="/batak-mandailing/kuliner" element={<Culinary />} />
          <Route path="/batak-mandailing/rumah-adat" element={<House />} />
          <Route path="/batak-mandailing/tradisi-dan-permainan" element={<Tradition />}/>
          <Route path="/batak-mandailing/galeri" element={<Gallery />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
