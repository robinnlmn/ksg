import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

function Member() {
    return (
        <div className={styles.Member}>
            <div className={styles.membertop}>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                    <p>@member</p>
                </div>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
            </div>
            <div className={styles.membertop}>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
                <div className={styles.member}>
                    <Image src="/images/member/default.jpg" width={250} height={250} alt="Member" className={styles.memberimage} />
                    <p>A Member</p>
                </div>
            </div>
        </div>
    )
}

export default Member