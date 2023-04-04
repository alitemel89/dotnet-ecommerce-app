import React from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <CategoryList />
      <Hero />
      <ProductList />
    </>
  );
}

export default HomePage;
