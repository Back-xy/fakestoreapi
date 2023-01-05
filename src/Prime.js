import React from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import ExampleCode from "./components/header/ExampleCode";
import Header from "./components/header/Header";
import Resources from "./components/resources/Resources";

const Prime = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <ExampleCode />
      <Resources />
      <Footer />
    </div>
  );
};

export default Prime;
