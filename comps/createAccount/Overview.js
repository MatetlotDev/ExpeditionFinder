import React from 'react'

import styles from '/styles/comps/createAccount/Overview.module.scss'
import Image from 'next/image'

import { IoMale } from 'react-icons/io5'

import { useSelector } from 'react-redux'

export default function Overview() {

    const firstStepContent = useSelector(str => str.createAccountContent)


    return (
        <div className={styles.profile_info}>
            <h2>Aperçu</h2>

            <div className={styles.user_infos}>
                <div className={styles.profile_image} >
                    <Image className={styles.image} src='/images/person4.jpg' layout="fill" objectFit='cover' />
                    <div className={styles.country}><Image className={styles.country_image} src='/icons/belgium.png' layout="fill" objectFit='cover' /> </div>
                    <div className={styles.gender}><IoMale color="#353535" size="2rem" /></div>
                </div>
                <div className={styles.infos}>
                    <h6>{'Matthias' + ' ' + 'Lechien'}</h6>
                    <p>40 ans</p>
                </div>
            </div>

            <p className={styles.date}>Membre depuis 24/12/2022</p>

        </div>
    )
}
