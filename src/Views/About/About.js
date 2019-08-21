import React from "react";
import Skills from './Skills';
import Services from './Services';
import Pricing from './Pricing';
import Info from './Info';

function About() {

  return(
    <section id="about" className="section about-section active">
      <div className="container-fluid">
        <Info />
        <Services />
        <Skills />
        <Pricing />
      </div>
    </section>
  );
}

export default About;
