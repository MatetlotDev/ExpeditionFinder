import React from 'react'
import { useSelector } from 'react-redux'
import Overview from './Overview'

import styles from '/styles/comps/createAccount/TechnicalLevel.module.scss'

export default function TechnicalLevel({ actualStep }) {

  const secondStepContent = useSelector(str => str.createAccountContent)

  const handleNextStep = () => {}

  return (
    <div>

      <Overview actualStep={actualStep} />

      <div className={styles.card}>
        <h2>Niveau Technique</h2>
        <p>Il est important de rester honnête pour ne pas prendre de risque par la suite.</p>
        <form>
          <input type="radio" name="level" id="ignorant" value='ignorant' />
          <label htmlFor="ignorant">Ignorant : Je n’ai jamais pratiqué l’alpinisme, ni l’escalade.</label>
          <input type="radio" name="level" id="beginner" value='beginner' />
          <label htmlFor="beginner">Débutant : J’ai déjà fait une école de glace et/ou d’escalade. J’ai réalisé une ou quelques courses en haute montagne.</label>
          <input type="radio" name="level" id="confirmed" value='confirmed' />
          <label htmlFor="confirmed">Confirmé : Je maîtrise la technique du cramponnage dans des pentes de 30° à 40° d’inclinaison. J’ai fait plusieurs longues courses en haute montagne, toujours en second.</label>
          <input type="radio" name="level" id="expert" value='expert' />
          <label htmlFor="expert">Expert : Je maîtrise la technique du cramponnage dans des pentes à plus de 50° d’inclinaison, je fait de temps en temps de la cascade de glace et régulièrement de l’escalade.</label>
          <input type="radio" name="level" id="master" value='master' />
          <label htmlFor="master">Maître : Je maîtrise la technique du cramponnage dans toutes les pentes. J’ai de l’expérience dans les terrains mixte en montagne. J’ai une pratique très régulière des activités de montagne : escalade, alpinisme, cascade de glace et/ou goulottes</label>
          <div className={styles.next} onClick={handleNextStep}>
            <button type="submit">Suivant</button>
            <a>Passer</a>
          </div>
        </form>
      </div>

    </div>
  )
}
