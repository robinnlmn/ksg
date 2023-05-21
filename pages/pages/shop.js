import React, { useEffect } from 'react'
import styles from '../../styles/Home.module.css'

function Shop() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div>
            <div className={styles.shopitem}>
                <stripe-buy-button
                    buy-button-id="buy_btn_1NA8xSFGCYrsaKtzR9eWfTXy"
                    publishable-key="pk_test_51NA8qzFGCYrsaKtzal3iTZeQ5K5XlnPBNNuNOg2atX7ZkXmoHAVGmtZvuivkf0idIGSYKAeriEACvlDu1OssX64n00NtTdZQNg"
                ></stripe-buy-button>
            </div>
        </div>
    )
}

export default Shop