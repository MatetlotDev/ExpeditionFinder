import React, { useState, useEffect } from 'react'

import styles from '../styles/CreateAccount.module.scss'

import NavBar from '../comps/NavBar'
import PersonnalInfos from '../comps/createAccount/PersonnalInfos'
import Languages from '../comps/createAccount/Languages'
import TechnicalLevel from '../comps/createAccount/TechnicalLevel'
import Description from '../comps/createAccount/Description'


export default function createAccount() {

  const [actualStep, setActualStep] = useState(0)
  const [countries, setCountries] = useState([])


  useEffect(() => {
    (async () => {
      const req = await fetch('https://restcountries.com/v3.1/region/europe')
      const res = await req.json()

      res.forEach(e => setCountries(arr => [...arr, { name: e.name.common, flag: e.flags.svg, lang: e.languages[Object.keys(e.languages)[0]] }]))

    })()
  }, [])

  let content = '';

  const nextStep = () => setActualStep(actualStep + 1)
  

  if(actualStep === 0) content = <PersonnalInfos nextStep={nextStep} countries={countries} />;
  else if(actualStep === 1) content = <Languages nextStep={nextStep} actualStep={actualStep} countries={countries} />;
  else if(actualStep === 2) content = <TechnicalLevel nextStep={nextStep} actualStep={actualStep} />
  else if(actualStep === 3) content = <Description />

  return (
    <div className={styles.container}>

      <NavBar />

      <div className={styles.content}>
        
        {content}

      </div>
    </div>
  )
}
