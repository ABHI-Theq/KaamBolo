import React from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
