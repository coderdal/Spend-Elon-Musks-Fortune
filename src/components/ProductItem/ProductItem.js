import React from "react";

import styles from "./ProductItem.module.css";

import { MainContext, useContext } from "../../context/context";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductItem = ({ name, price, image, product }) => {
  const { basket, setBasket, total, money } = useContext(MainContext);

  const amount = basket.find((item) => item.id === product.id);

  const addToBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };

  const removeFromBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket.amount === 1) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      checkBasket.amount -= 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <div className={styles.productItem}>
      <figure className={styles.figure}>
        <LazyLoadImage effect="blur" src={image} alt="Product" className={styles.productImage} width="100%" height="100%" />
      </figure>
      <h3 className={styles.name}>{name}</h3>
      <h2 className={styles.price}>{price} $</h2>
      <div className={styles.actions}>
        <button
          className={styles.sell}
          onClick={removeFromBasket}
          disabled={!amount < 1 ? false : true}
        >
          Sell
        </button>
        <span className={styles.amount}>{amount ? amount.amount : "0"}</span>
        <button
          className={styles.buy}
          onClick={addToBasket}
          disabled={total + price <= money ? false : true}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
