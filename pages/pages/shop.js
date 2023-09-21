import React, { useEffect } from "react";
import styles from "../../styles/Shop.module.css";

function Shop() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.shop}>
      <div className={styles.shopgrid}>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
      </div>
    </div>
  );
}

export default Shop;
