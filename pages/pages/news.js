import React from "react";
import CountdownNotification from "../../components/CountdownNotification";
import styles from "../../styles/News.module.css";

function News() {
  return (
    <div className={styles.news}>
      <div className={styles.notification} id="new">
        <img src="/images/KSG4Eblue.png" alt="Notification" />
        <div>
          <div>
            <div className={styles.notificationTop}>
              <p>S¥DE</p>
              <CountdownNotification releaseTime="2024-10-01T13:23:00Z" />
            </div>
            <p>COLLECTION DROPPING</p>
          </div>
        </div>
      </div>

      <div className={styles.notification}>
        <img src="/images/KSG4Eblue.png" alt="Notification" />
        <div>
          <div>
            <div className={styles.notificationTop}>
              <p>TEST</p>
              <CountdownNotification releaseTime="2023-09-28T13:30:00Z" />
            </div>
            <p>YANG LOST HIS VIRGINITY</p>
          </div>
        </div>
      </div>

      <div className={styles.notification}>
        <img src="/images/OundK.jpg" alt="Notification" />
        <div>
          <div>
            <div className={styles.notificationTop}>
              <p>KSG4E</p>
              <CountdownNotification releaseTime="2023-09-21T13:30:00Z" />
            </div>
            <p>NEW RELEASE BY KSG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
