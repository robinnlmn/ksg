import React, { useEffect } from "react";
import styles from "../../styles/News.module.css";

function News() {
  return (
    <div className={styles.news}>
      <div className={styles.notification} id="new">
        <img src="/images/ksg4eblue.png" />
        <div>
          <p>
            <p>S¥DE</p>
            <p>now</p>
          </p>
          <p>COLLECTION DROPPING</p>
        </div>
      </div>

      <div className={styles.notification}>
        <img src="/images/ksg4e.png" />
        <div>
          <p>
            <p>SEX</p>
            <p>never</p>
          </p>
          <p>YANG LOST HIS VIRGINITY</p>
        </div>
      </div>

      <div className={styles.notification}>
        <img src="/images/OundK.jpg" />
        <div>
          <p>
            <p>KSG4E</p>
            <p>20m ago</p>
          </p>
          <p>NEW RELEASE BY KSG</p>
        </div>
      </div>
    </div>
  );
}

export default News;
