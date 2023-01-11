import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Features from "./Features";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
};

export default HomePage;
