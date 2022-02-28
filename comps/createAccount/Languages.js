import React from 'react'

import styles from '/styles/comps/createAccount/Languages.module.scss'
import Overview from './Overview'

import Image from 'next/image'

export default function Languages() {
    return (
        <>
            <Overview />
            <div className={styles.card}>

                <div className={styles.svg_wrapper}>
                    <Image src='/svg/undraw_work_chat_re_qes4.svg' width={400} height={300} />
                </div>
            </div>
        </>
    )
}
