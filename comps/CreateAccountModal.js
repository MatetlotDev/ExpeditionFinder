import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { IoMdClose } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { FiMail } from 'react-icons/fi'
import { FaFacebookF, FaApple } from 'react-icons/fa'

import styles from '../styles/comps/CreateAccountModal.module.scss'

export default function CreateAccountModal({ state, handleModalState }) {


    return (
        <div className={styles.background} style={{display: state}}>
            <div className={styles.card}>
                <h3>Créer un compte</h3>
                <p>Pour pouvoir poster des expéditions ou communiquer avec les utilisateurs  il faut d’abord te créer un compte !</p>
                <div className={styles.image}>
                    <Image src='/svg/undraw_swipe_profiles_re_tvqm.svg' width={293} height={193} />
                </div>
                <Link href='/createAccount'><button><FiMail size='1.5rem' color='#fff' />Adresse mail</button></Link>
                <button><FcGoogle size='1.5rem' />Google</button>
                <button><FaFacebookF size='1.5rem' color='#fff' />Facebook</button>
                <button><FaApple size='1.5rem' color='#353535' />Apple</button>
                <span>Déjà un compte ?</span>
                <div className={styles.close} onClick={handleModalState}>
                    <IoMdClose color='#fff' size='2rem' />
                </div>
            </div>
        </div>
    )
}
