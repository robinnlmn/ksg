import React from 'react'
import styles from '../../styles/Home.module.css'

function Contact() {
    return (
        <div className={styles.contact}>
            <form action="https://formsubmit.co/c5705b4e8ce652521920457b2428864c" method="POST" className={styles.form}>
                {/* <form action="/api/form" method="POST" className={styles.form}> */}
                <h1>contact</h1>
                <div className={styles.formRow}>
                    <label htmlFor='name'>NAME *</label>
                    <input type="text" name="name" required placeholder='your name...' />
                </div>
                <div className={styles.formRow}>
                    <label htmlFor='email'>EMAIL *</label>
                    <input type="email" name="email" required placeholder='your email...' />
                </div>
                <div className={styles.formRow}>
                    <label htmlFor='tel'>TELEFON *</label>
                    <input type="tel" name="phone" required placeholder='your phone...' />
                </div>
                {/* <div className={styles.formRow}>
                    <select required name="typ">
                        <option value="Privatperson">Privatperson</option>
                        <option value="Unternehmen">Unternehmen</option>
                        <option value="Andere">Andere</option>
                    </select>
                </div> */}
                <div className={styles.formArea}>
                    <label htmlFor='message'>TEXT *</label>
                    <textarea name="message" required placeholder="how can we help"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact