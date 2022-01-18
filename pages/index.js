import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>

      {/* navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src='/icons/logo_noir.png' width={100} height={100} />
          <p>Expedition Finder</p>
        </div>
        <div className={styles.menu}>
          <div className={styles.image}>
            <Image src='/icons/email_noir.png' width={40} height={40} />
          </div>
          <div className={styles.image}>
            <Image src='/icons/user_noir.png' width={50} height={50} />
          </div>
        </div>
      </nav>

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
          <button>Découvrir les expéditions</button>
          <p>Parcours les projets des autres personnes et choisi en un qui te tente.</p>
        </div>

        <div className={styles.svg_home}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="406" height="306" class="illustration styles_illustrationTablet__1DWOa">
            <path d="M228.33,96.35s0-10.25,9-10.69,41.87-2.63,47,14.2,1.9,61.25-19.55,69.42-44.54-5.1-44.54-5.1S237,130.91,228.33,96.35Z" fill="#284B63"></path>
            <path d="M235.09,94.28s-13.15,1.13-20.47,7.94S209,141.37,168,139.5V146s50.21,3.74,58.21-25Z" fill="#68e1fd"></path>
            <path d="M235.09,94.28s-13.15,1.13-20.47,7.94S209,141.37,168,139.5V146s50.21,3.74,58.21-25Z" fill="#fff" opacity="0.46"></path>
            <path d="M241.59,74.22a30.77,30.77,0,0,0-.57,8.16,2.48,2.48,0,0,0,2.79,2.13,5.47,5.47,0,0,0,4.73-3.58l2-4.1a4.43,4.43,0,0,0-1.38-4.92C246.61,69.59,242.05,71.25,241.59,74.22Z" fill="#f4a28c"></path>
            <polygon points="250.15 77.57 250.79 93.7 241.88 93.42 244.99 81.8 250.15 77.57" fill="#f4a28c"></polygon>
            <path d="M247.34,68.72c.79,0,1.37.83,2,1.27a5,5,0,0,1,2,4.75L250.65,81a3.33,3.33,0,0,1-3.85-1.8,4.11,4.11,0,0,1,.53-4.48,20.08,20.08,0,0,1-4.55-.18,4.64,4.64,0,0,1-1.46-.48S239.22,68.58,247.34,68.72Z" fill="#24285b"></path>
            <path d="M246.29,79s.26-1.88,1.66-1.56,1,3-.92,3.05Z" fill="#f4a28c"></path><path d="M241.11,77.29,239.53,79a.79.79,0,0,0,.34,1.29l1.83.57Z" fill="#f4a28c"></path>
            <path d="M244.2,84.31A5.89,5.89,0,0,0,247.27,83s-.48,2.91-4,5.43Z" fill="#ce8172" opacity="0.31"></path>
            <path d="M250.79,93.7l-8.91-.28S218,93.8,216.5,111.21s8.71,31,5.31,44.59l32.42,4.14S307.37,106.54,250.79,93.7Z" fill="#68e1fd"></path>
            <path d="M246.22,112.14a43.07,43.07,0,0,0,.74,13A29.36,29.36,0,0,1,240.72,151l-5.63,6.52,19.14,2.45S268.82,144,271.5,136.39s-3.27-16.19-3.27-16.19Z" opacity="0.08"></path>
            <polygon points="114.19 262.6 292.92 262.6 277.94 226.65 227.11 215.34 202.7 188.69 141.42 193.37 114.19 262.6" fill="#e6e6e6"></polygon>
            <path d="M243.23,158.53h0l-21.42-2.73h-.57a28,28,0,0,0-25.64,17.32l-5.15,12.47,4.08,1.79,7.5-9.49a22.2,22.2,0,0,1,19.07-8.37l8.92.67a15.69,15.69,0,0,1,14.22,12.22c3.2,14.68,3,32.58,3,32.58h6l1-55.05Z" fill="#24285b"></path>
            <polygon points="77.25 262.6 107.13 222.6 156.78 238.42 210.69 243.49 219.84 262.6 77.25 262.6" fill="#c9c9c9"></polygon>
            <path d="M250.78,106.78a13,13,0,0,1,18.81-4.66c10.94,7.38,26.94,22.1,22.36,43-6.81,31-42.56,17.7-42.56,17.7v-7.15s27.92,5.79,26.22-14C274.19,125.23,243.56,121.22,250.78,106.78Z" fill="#68e1fd"></path>
            <path d="M250.78,106.78a13,13,0,0,1,18.81-4.66c10.94,7.38,26.94,22.1,22.36,43-6.81,31-42.56,17.7-42.56,17.7v-7.15s27.92,5.79,26.22-14C274.19,125.23,243.56,121.22,250.78,106.78Z" fill="#fff" opacity="0.46"></path>
            <path d="M249.39,157.54s-8.09-2.39-7.51,2.89,7.51,2.36,7.51,2.36Z" fill="#f4a28c"></path>
            <path d="M267,98a10.93,10.93,0,0,0-9.3-2.2c-4.23.89-10.25,3.08-11.9,8.43-2.63,8.51,9.52,34.42,28.09,32,0,0-6.21-8.81-12-13.74s-12.76-24.16,6.73-20.93C268.67,101.55,269.47,100.09,267,98Z" fill="#284B63"></path>
            <path d="M267,98a10.93,10.93,0,0,0-9.3-2.2c-4.23.89-10.25,3.08-11.9,8.43-2.63,8.51,9.52,34.42,28.09,32,0,0-6.21-8.81-12-13.74s-12.76-24.16,6.73-20.93C268.67,101.55,269.47,100.09,267,98Z" opacity="0.08"></path>
            <path d="M168,139.5s-8.43-1.88-8.17,3.23S168,146,168,146Z" fill="#24285b"></path>
            <rect x="162.66" y="74.29" width="2.85" height="117.72" fill="#24285b"></rect>
            <path d="M162.66,77.29s-10.51-4.93-18.68,0S123,87,111.55,79,83,79,83,79v52.78s17.1-10.32,28.85-3.12,24,.31,32.93-4,17.92.77,17.92.77Z" fill="#68e1fd"></path>
            <polygon points="192.66 177.28 199.86 180.63 194.49 189.32 180.23 190.73 188.23 186.65 192.66 177.28" fill="#68e1fd"></polygon>
            <polygon points="246.34 206.39 253.39 206.39 253.39 218.31 258.63 222.35 247.27 219.83 246.34 206.39" fill="#68e1fd"></polygon>
            <path d="M240.91,74.31s6.69,2,10.46,1.78c0,0,2.1-4.42.32-7.75C250.13,65.41,240.11,62.11,240.91,74.31Z" fill="#68e1fd"></path>
            <path d="M241,71.21s7,2.3,11.2,2.41a10.35,10.35,0,0,1-.79,2.47s-3.52.35-10.46-1.78A15.84,15.84,0,0,1,241,71.21Z" fill="#fff" opacity="0.68"></path>
            <path d="M235.77,94.14s-10.47-.81-16.09,2.12-15.69,28.25.84,41.12C220.52,137.38,207.19,100.83,235.77,94.14Z" fill="#284B63"></path>
            <path d="M235.77,94.14s-10.47-.81-16.09,2.12-15.69,28.25.84,41.12C220.52,137.38,207.19,100.83,235.77,94.14Z" opacity="0.08"></path>
            <path d="M238.51,93.7s-1.34-3.65,4.49-4.46,13.73-.52,12,5.55A59.22,59.22,0,0,1,238.51,93.7Z" fill="#68e1fd"></path>
            <path d="M238.51,93.7s-1.34-3.65,4.49-4.46,13.73-.52,12,5.55A59.22,59.22,0,0,1,238.51,93.7Z" fill="#fff" opacity="0.68"></path>
          </svg>
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
            <button>Créer un compte</button>
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
            <button>Découvrir les expéditions</button>
          </div>
          <div className={styles.svg}>
            <Image src='/svg/undraw_adventure_re_ncqp.svg' width={293} height={193} />
          </div>
        </div>

      </div>

    </div>
  )
}
