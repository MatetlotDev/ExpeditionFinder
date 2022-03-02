import React from 'react'

import styles from '/styles/comps/createAccount/Overview.module.scss'
import Image from 'next/image'

import { IoFemale, IoMaleFemale, IoMale } from 'react-icons/io5'

import { useSelector } from 'react-redux'

export default function Overview({ actualStep }) {

    const firstStepContent = useSelector(str => str.createAccountContent)

    let gender;
    if (firstStepContent.gender === 'male') gender = <IoMale color="#353535" size="2rem" />
    else if (firstStepContent.gender === 'female') gender = <IoFemale color="#353535" size="2rem" />
    else gender = <IoMaleFemale color="#353535" size="2rem" />

    const age = Math.abs(((new Date(Date.now() - (new Date(firstStepContent.birthDate)).getTime())).getUTCFullYear()) - 1970)

    let languages = '';
    if(actualStep >= 2) languages = firstStepContent.languages.join(' / ')

    return (
        <div className={styles.profile_info}>
            <h2>Aperçu</h2>

            <div className={styles.user_infos}>
                <div className={styles.profile_image} >
                    <Image className={styles.image} src={firstStepContent.image} layout="fill" objectFit='cover' />
                    <div className={styles.country}><Image className={styles.country_image} src={firstStepContent.country} layout="fill" objectFit='cover' /> </div>
                    <div className={styles.gender}>{gender}</div>
                </div>
                <div className={styles.infos}>
                    <h6>{firstStepContent.firstName + ' ' + firstStepContent.lastName}</h6>
                    <p>{age} ans</p>
                    <p>{languages}</p>
                </div>
            </div>

            <p className={styles.date}>Membre depuis {(new Date).toLocaleDateString()}</p>

            {/* {(() => {
                if(actualStep >= 3) return (
                    <div>
                        <p>Niveau Général : </p>
                        <p>   -   en Rocher : </p>
                        <p>   -   en Glace : </p>
                        <p>   -   en Montagne : </p>
                    </div>
                )
                else if(actualStep >= 4) return (
                    <div>
                        avis
                    </div>
                ) 
            })()} */}

        </div>
    )

}
