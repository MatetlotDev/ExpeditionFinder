import React from 'react'

import styles from '/styles/comps/createAccount/Languages.module.scss'
import Overview from './Overview'

import Image from 'next/image'

export default function Languages() {
    return (
        <>
            <Overview />

            <div className={styles.content}>
                <div className={styles.card}>
                    <h2>Language</h2>
                    <p>Ajoute une ou plusieurs langues pour savoir comment communiquer avec toi.</p>
                    <button className={styles.add_lang}>+ Ajouter</button>
                    <div className={styles.next}>
                        <button>Suivant</button>
                        <a href="#">Passer</a>
                    </div>
                </div>

                <div className={styles.svg_wrapper}>
                    <Image src='/svg/undraw_work_chat_re_qes4.svg' width={350} height={250} />
                </div>
            </div>
        </>
    )
}
