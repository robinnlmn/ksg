import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import News from './pages/news'
import Work from './pages/work'
import Member from './pages/member'
import Contact from './pages/contact'
import Shop from './pages/shop'
import Home from './pages/home'

function home() {
    const [currentTab, setCurrentTab] = useState(0)
    const [tabs, setTabs] = useState([<Home />, <News />, <Work />, <Member />, <Contact />, <Shop />])

    useEffect(() => {
        console.log(tabs)
    }, [])


    return (
        <div className={styles.container}>
            <Head>
                <title>KSG</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <Image src="/images/KSG4E.png" alt="Vercel Logo" width={64} height={64} className={styles.headerlogo} onClick={() => setCurrentTab(0)} />
                    <div className={styles.selector}>
                        <div className={styles.tab} onClick={() => setCurrentTab(1)}>
                            {currentTab == 1 ? <p style={{ borderBottom: '1px solid black' }}>news</p> : <p>news</p>}
                        </div>

                        <div className={styles.tab} onClick={() => setCurrentTab(2)}>
                            {currentTab == 2 ? <p style={{ borderBottom: '1px solid black' }}>work</p> : <p>work</p>}
                        </div>

                        <div className={styles.tab} onClick={() => setCurrentTab(3)}>
                            {currentTab == 3 ? <p style={{ borderBottom: '1px solid black' }}>member</p> : <p>member</p>}
                        </div>

                        <div className={styles.tab} onClick={() => setCurrentTab(4)}>
                            {currentTab == 4 ? <p style={{ borderBottom: '1px solid black' }}>contact</p> : <p>contact</p>}
                        </div>

                        <div className={styles.tab} onClick={() => setCurrentTab(5)}>
                            {currentTab == 5 ? <p style={{ borderBottom: '1px solid black' }}>shop</p> : <p>shop</p>}
                        </div>
                    </div>
                </div>
                <div className={styles.tabs}>
                    {tabs[currentTab]}
                </div>
            </main>

            <footer className={styles.footer}>
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
            </footer>
        </div>
    )
}

export default home