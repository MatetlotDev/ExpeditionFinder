import React, { useState, useRef } from 'react'

import styles from '/styles/comps/createAccount/Languages.module.scss'
import Overview from './Overview'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'

export default function Languages({ countries, actualStep, nextStep }) {

    const dispatch = useDispatch()
    const firstStepContent = useSelector(str => str.createAccountContent)

    const inputLang = useRef()
    const [languages, setLanguages] = useState([])

    const addLanguage = () => setLanguages(arr => [...arr, inputLang.current.value])

    const handleNextStep = () => {
        dispatch({ type: 'updateContent', content: {...firstStepContent, languages: languages }})
        nextStep()
    }

    return (
        <>
            <Overview step={actualStep} />

            <div className={styles.content}>
                <div className={styles.card}>
                    <h2>Language</h2>
                    <p>Ajoute une ou plusieurs langues pour savoir comment communiquer avec toi.</p>

                    {languages.map(e => <p className={styles.language}>- {e}</p>)}

                    <div className={styles.flex}>
                        <select ref={inputLang}>
                            <option disabled selected>Language</option>
                            {countries.map(e => <option value={e.lang}>{e.lang}</option>)}
                        </select>
                        <button className={styles.add_lang} onClick={addLanguage} >+ Ajouter</button>
                    </div>

                    <div className={styles.next} onClick={handleNextStep}>
                        <button>Suivant</button>
                        <a>Passer</a>
                    </div>
                </div>

                <div className={styles.svg_wrapper}>
                    <Image src='/svg/undraw_work_chat_re_qes4.svg' width={350} height={250} />
                </div>
            </div>
        </>
    )
}
