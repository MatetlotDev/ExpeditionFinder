import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../comps/NavBar';
import LoginModal from '../comps/createAccount/LoginModal';

import React, {useEffect, useState} from 'react'

export default function Home() {

  const [modalState, setModalState] = useState('none')

  const handleModalState = () => {
    modalState === 'none' ? setModalState('flex') : setModalState('none')
  }

  // useEffect(() => {
  //   (async () => {

  //     const req = await fetch('http://localhost:3000/api/test')
  //     const res = await req.json()
  //     console.log(res)
  //   })()
  // }, [])

  return (
    <div className={styles.container}>

      <LoginModal state={modalState} handleModalState={handleModalState} />

      <NavBar />

      {/* before scroll */}
      <main className={styles.main}>

        <div className={styles.home}>
          <h2>Expedition Finder t'aide à trouver un futur partenaire de montagne.</h2>
          <div className={styles.imageWrapper}>
            <Image className={styles.background} src="/images/background1.jpg" layout="fill" objectFit='cover' />
          </div>
        </div>

        <div className={styles.card_search}>
          <h6>Tu as une expédition en tête ?</h6>
          <p>Trouve quelqu'un qui a la même envie que toi.</p>
          <div className={styles.input}>
            <Image src="/icons/search.png" width={20} height={20} />
          </div>
        </div>

        <div className={styles.card_discover}>
          <h6>Pas encore de projet ?</h6>
          <Link href="/discover"><button>Découvrir les expéditions</button></Link>
          <p>Parcours les projets des autres personnes et choisi en un qui te tente.</p>
        </div>

        <div className={styles.svg_home}>
          <Image src="/svg/Adventure _Two Color.svg" width={393} height={293} /> 
        </div>

        <div className={styles.see_more}>
          <span>Comment ça fonctionne ?</span>
          <Image className={styles.arrow_down} src='/icons/down-arrow.png' width={30} height={30} />
        </div>

      </main>

      {/* after scroll */}
      <div className={styles.more}>

        <div className={styles.create_account}>
          <h3>Tu as déjà un projet de montagne, mais tu cherches quelqu'un pour t'accompagner ?</h3>
          <p>Cherche parmis toutes les expéditions déjà postées pour voir si ton projet en fait partie.</p>
          <div className={styles.input}>
            <Image src="/icons/search.png" width={20} height={20} />
          </div>

          <div className={styles.imageWrapper}>
            <Image className={styles.background} src="/images/background2.jpg" layout="fill" objectFit='cover' />
          </div>
    
          <div className={styles.card_account}>
            <h6>Tu ne trouves pas ton projet ?</h6>
            <p>Pas de problème, connecte toi ou crée un compte, puis propose ton projet aux autres utilisateurs. <br/>Si quelqu'un est intéressé par celui-ci il te contactera rapidement.</p>
            <button onClick={() => setModalState('flex')}>Créer un compte</button>
          </div>

          <div className={styles.svg}>
            <Image src="/svg/undraw_searching_p-5-ux.svg" layout='fill' objectFit='contain' />
          </div>
          

        </div>

        <div className={styles.discover}>
          <h3>Tu n'as pas encore d'idée pour ta prochaine ascension ?</h3>
          <div className={styles.imageWrapper}>
            <Image className={styles.background} src="/images/background3.jpg" layout="fill" objectFit='cover' />
          </div>
          <div className={styles.card_discover}>
            <p>Découvre autour de toi les personnes qui proposent déjà un projet. Si le projet t'intéresse prend directement contact avec la personne.</p>
            <Link href="/discover"><button>Découvrir les expéditions</button></Link>
          </div>
          <div className={styles.svg}>
            <Image src='/svg/undraw_adventure_re_ncqp.svg' width={293} height={193} />
          </div>
        </div>

      </div>

    </div>
  )
}
