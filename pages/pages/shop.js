import React, { useEffect, useState } from "react";
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

  const [products, setProducts] = useState([
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
    },
  ]);

  return (
    <div className={styles.shop}>
      <div className={styles.shopgrid}>
        {products.map((item, index) => {
          return (
            <div className={styles.itemshop} key={index}>
              <img src={item.img} />
              <div className={styles.itemBottomSection}>
                <div>
                  <p className={styles.itemname}>{item.name}</p>
                  <p className={styles.itemprice}>{item.price}</p>
                </div>
                {/* <a className={styles.itembuy}>BUY</a> */}
              </div>
            </div>
          );
        })}

        {/* <div className={styles.itemshop}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaV7yYxt071ikdWM1boSVA12wVu4kvduJfDw&usqp=CAU" />
          <p className={styles.itemname}>COOLER HOODIE</p>
          <p className={styles.itemprice}>14€</p>
        </div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div>
        <div className={styles.itemshop}></div> */}
      </div>
    </div>
  );
}

export default Shop;
