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
      name: "hoodie syde",
      price: "39.99€",
      img: "/images/products/hoodies/syde hoodie 1.0.png",
      type: "hoodie",
      available: true,
      link: "https://buy.stripe.com/test_cN23e7cVA4YRek06oq",
    },
    {
      name: "flower shirt",
      price: "39.99€",
      img: "/images/products/tshirts/syde flower shirt.png",
      type: "tshirt",
      available: true,
      link: "https://buy.stripe.com/test_7sIdSL4p4crj6Ry289",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
      type: "hoodie",
      available: true,
      link: "https://buy.stripe.com/test_7sIdSL4p4crj6Ry289",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
      type: "hoodie",
      available: true,
      link: "https://buy.stripe.com/test_7sIdSL4p4crj6Ry289",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
      type: "hoodie",
      available: true,
      link: "https://buy.stripe.com/test_7sIdSL4p4crj6Ry289",
    },
    {
      name: "HOODIE",
      price: "39.99€",
      img: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvNTFcL2UyXC9mZlwvMjEwMDAwNjEzMzkxMl8yMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MDAsImhlaWdodCI6MjQwMCwiZml0IjoiaW5zaWRlIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJmb3JjZSI6dHJ1ZX19fQ==",
      type: "hoodie",
      available: true,
      link: "https://buy.stripe.com/test_7sIdSL4p4crj6Ry289",
    },
  ]);

  const [modalItem, setModalItem] = useState(0);

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.dataset.active = false;
  }

  function openModal() {
    const modal = document.getElementById("modal");
    modal.dataset.active = true;
  }

  return (
    <div className={styles.shop}>
      <div className={styles.overlay}></div>

      <div className={styles.modal} id="modal" data-active="false">
        <div className={styles.modalHeader}>
          <div className={styles.title}>{products[modalItem].name}</div>
          <button className={styles.closeButton} onClick={() => closeModal()}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          {/* <img src={products[modalItem].img} className={styles.modalImage} />
          <div className={styles.modalSeperator}></div>
          <div className={styles.modalDescription}>
            <h1>{products[modalItem].name}</h1>
            <table></table>
          </div> */}
        </div>
      </div>

      <div className={styles.shopgrid}>
        {products.map((item, index) => {
          return (
            <a
              className={styles.itemshop}
              key={index}
              // href={item.link}
              // onClick={() => {
              //   openModal();
              //   setModalItem(index);
              // }}
              style={{ opacity: item.available ? 1 : 0.5 }}
            >
              <img src={item.img} />
              <div className={styles.itemBottomSection}>
                <div>
                  <p className={styles.itemname}>{item.name}</p>
                  <p className={styles.itemprice}>{item.price}</p>
                </div>
                {/* <a className={styles.itembuy}>BUY</a> */}
              </div>
            </a>
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
