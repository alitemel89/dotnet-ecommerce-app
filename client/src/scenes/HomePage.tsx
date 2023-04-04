import React from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Signup from "../components/Signup";

function HomePage() {
  return (
    <>
      <CategoryList />
      <Hero />
      <ProductList />
      <Signup />
    </>
  );
}

export default HomePage;
