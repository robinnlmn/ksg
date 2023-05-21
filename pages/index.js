import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  function openSite() {
    const image = document.getElementById('image');
    image.classList.add('Home_openClass__Xb1oW')
    console.log(image.classList)

    setTimeout(function () {
      image.classList.remove("Home_openClass__Xb1oW");
      window.location.href = '/home'
    }, 1600);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>KSG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/images/KSG4E.png" alt="Vercel Logo" onClick={() => openSite()} id="image" className={styles.ksglogo} />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/ksg4e/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/instagram.png" alt="Vercel Logo" width={35} height={35} />
          </span>
        </a>
        <a
          href="https://youtube.com/@ksg4e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/youtube.svg" alt="Vercel Logo" width={35} height={35} />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@ksg4e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/tiktok.svg" alt="Vercel Logo" width={35} height={35} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
