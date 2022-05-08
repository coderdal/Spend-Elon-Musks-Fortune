import React from "react";
import ProductItem from "../ProductItem/ProductItem";

import styles from "./ProductList.module.css";

import products from "../products.json";

const ProductList = () => {
  return (
    <main className={styles.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          product={product}
        />
      ))}
    </main>
  );
};

export default ProductList;
