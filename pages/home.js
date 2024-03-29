import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import News from "./pages/news";
import Work from "./pages/ksg";
import Member from "./pages/member";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBell, FaUserAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";

function Home() {
  const [currentTab, setCurrentTab] = useState(2);
  const [tabs, setTabs] = useState([
    <></>,
    <News key={1} />,
    <Work key={2} />,
    <Member key={3} />,
    <Contact key={4} />,
    <Shop key={5} />,
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>KSG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          src="https://kit.fontawesome.com/201054a168.js"
          crossorigin="anonymous"
        ></script> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.selector}>
            <div className={styles.tab} onClick={() => setCurrentTab(1)}>
              <p style={{ color: "black", fontSize: 16 }}>
                <FaBell />
              </p>
            </div>

            <div className={styles.tab} onClick={() => setCurrentTab(3)}>
              <p style={{ color: "black", fontSize: 16 }}>
                <FaUserAlt />
              </p>
            </div>

            <div className={styles.tab} onClick={() => setCurrentTab(2)}>
              <Image
                src="/images/KSG4E.png"
                alt="Vercel Logo"
                width={64}
                height={64}
                className={styles.headerlogo}
                onClick={() => setCurrentTab(0)}
              />
            </div>

            <div className={styles.tab} onClick={() => setCurrentTab(4)}>
              <p style={{ color: "black", fontSize: 16 }}>
                <FaEnvelope />
              </p>
            </div>

            <div className={styles.tab} onClick={(e) => setCurrentTab(5)}>
              <div>
                <p style={{ color: "black", fontSize: 16 }}>
                  <FaShoppingCart />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tabs}>{tabs[currentTab]}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/ksg4e/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/instagram.png"
              alt="Vercel Logo"
              width={31}
              height={31}
            />
          </span>
        </a>
        <a
          href="https://youtube.com/@ksg4e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/youtube.svg"
              alt="Vercel Logo"
              width={35}
              height={35}
            />
          </span>
        </a>
        <a
          href="https://open.spotify.com/intl-de/artist/4l0qxREtGzLR33BVUKYpo0?si=nYP6kocvRD6StNIYiLjLHA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/spotify.png"
              alt="Vercel Logo"
              width={30}
              height={30}
            />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@ksg4e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/tiktok.svg"
              alt="Vercel Logo"
              width={28}
              height={28}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
