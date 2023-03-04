import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Data from "./components/Data/Data";
import Cloud from "./components/Cloud/Cloud";
import Footer from "./components/Footer/Footer";
import Recovery from "./components/Recovery/Recovery";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Recovery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
