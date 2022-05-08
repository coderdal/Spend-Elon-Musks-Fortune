import { useState, useEffect } from "react";

import { MainContext } from "./context/context";
import Header from "./components/Header/Header";

import styles from "./App.module.css";
import ProductList from "./components/ProductList/ProductList";

import products from "./components/products.json";
import Footer from "./components/Footer/Footer";

function App() {
  const [money, setMoney] = useState(265000000000);

  const [basket, setBasket] = useState([]);

  const [total, setTotal] = useState(0);

  const clearBasket = () => {
    setBasket([]);
    setTotal(0);
  };

  const data = {
    money,
    setMoney,
    basket,
    setBasket,
    total,
    clearBasket,
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <MainContext.Provider value={data}>
      <section className={styles.mainsection}>
        <Header />

        <ProductList />

        <Footer />
      </section>
    </MainContext.Provider>
  );
}

export default App;
