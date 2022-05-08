import React from "react";

import styles from "./Footer.module.css";

import products from "../products.json";

import { MainContext, useContext } from "../../context/context";

const Footer = () => {
  const { clearBasket, basket } = useContext(MainContext);

  let total = 0;

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {basket.length > 0 && (
          <button onClick={clearBasket} className={styles.clear}>
            Clear Basket{" "}
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z" />
            </svg>
          </button>
        )}

        {basket.length > 0 && (
          <div className={styles.bill}>
            <ul>
              <li>
                <span>Name</span>
                <span>Amount</span>
                <span>Price</span>
              </li>
              {basket.map((item) => {
                const product = products.find((i) => i.id === item.id);
                total += item.amount * product.price;
                return (
                  <li key={item.id}>
                    <span>{product.name}</span>
                    <span>x{item.amount}</span>
                    <span>{item.amount * product.price}$</span>
                  </li>
                );
              })}
              <li>
                <span></span>
                <span></span>
                <span>Total: {total}$</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className={styles.bottom}>
        <h3>
          Made By{" "}
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noreferrer"
          >
            Muhammed ERDAL
          </a>
        </h3>

        <div className={styles.developer}>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
            </svg>
          </a>
          <a
            href="https://github.com/coderdal"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
