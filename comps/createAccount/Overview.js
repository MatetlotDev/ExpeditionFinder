import React from 'react'

import styles from '/styles/comps/createAccount/Overview.module.scss'

import { useSelector } from 'react-redux'

export default function Overview() {

    const firstStepContent = useSelector(str => str.createAccountContent)

    console.log(firstStepContent)

    return (
        <div className={styles.card}>
            <h2>Aperçu</h2>

            {/* <div className={styles.profile_image} onClick={() => inputFile.current.click()}>
                <Image className={styles.image} src={imageUrl || '/svg/undraw_profile_pic_ic-5-t.svg'} layout="fill" objectFit='cover' />
                <div className={styles.country}>{countryIcon}</div>
                <div className={styles.gender}>{genderIcon}</div>
            </div> */}

        </div>
    )
}
