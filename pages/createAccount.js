import React, { useState } from 'react'

import styles from '../styles/CreateAccount.module.scss'

import NavBar from '../comps/NavBar'
import PersonnalInfos from '../comps/createAccount/PersonnalInfos'
import Languages from '../comps/createAccount/Languages'


export default function createAccount() {

  const [actualStep, setActualStep] = useState(1)

  let content = '';

  const nextStep = () => setActualStep(actualStep + 1)
  

  if(actualStep === 0) content = <PersonnalInfos nextStep={nextStep} />;
  else if(actualStep === 1) content = <Languages />;

  return (
    <div className={styles.container}>

      <NavBar />

      <div className={styles.content}>
        
        {content}

      </div>
    </div>
  )
}
