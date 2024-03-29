import React, { useState, useEffect } from "react";
import './assets/app.css';
import Cover from './Componentes/cover/Cover';
import Navbar from './Componentes/navbar/Navbar';
import About from './Componentes/about/About';
import Slider from './Componentes/slider/Slider';
import Info from "./Componentes/info/Info";
import Footer from "./Componentes/footer/Footer";
import Graph from "./Componentes/graph/Graph";
//Importar componentes

function App() {
  const [scrollHeight, setScrollHeight] = useState(0); //Guardamos la posición del scroll

  const handleScroll = () => { //Esta función controla la posición del scroll
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => { //Cuando hacemos Scroll se actualizara.
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Graph />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;