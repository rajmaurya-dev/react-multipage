import React from "react";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  // const data = {
  //   name: "Prashant Raj",
  //   images: "./images/about1.svg",
  // };
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => {
    updateAboutPage();
  }, []);

  return <HeroSection />;
};

export default About;
