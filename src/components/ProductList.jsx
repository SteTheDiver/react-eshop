import React from "react";
import GridView from "./GridView";
import { useFilterContext } from "../context/filter_context";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.lenght < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products are corrisponding to your search..
      </h5>
    );
  }
  if (grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
