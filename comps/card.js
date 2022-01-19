import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa';
import { RiMenLine } from 'react-icons/ri';
import styles from '../styles/Discover.module.scss';
import { useState } from 'react';


export default function Card() {

    const [isOpen, setIsOpen] = useState(false)

    const openCard = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.card} onClick={() => openCard()} style={{ 'max-height': isOpen ? 'max-content' : '11vh' }}>

            <div className={styles.left_card}>
                <div className={styles.user_infos}>
                    <div className={styles.avatar_wraper}>
                        <Image className={styles.avatar} src='/images/person3.jpg' layout='fill' objectFit='cover' alt='avatar' />
                        <span className={styles.country}><Image src="/icons/belgium.png" width={15} height={15} alt='country' /></span>
                    </div>
                    <div className={styles.infos}>
                        <div className={styles.name}>Firstname LastName <RiMenLine size="17px" color="#353535" /></div>
                        <span className={styles.age}>Age - Experience</span>
                    </div>
                </div>
                <span className={styles.date}>11/07/2021</span>
                <p className={styles.description}>
                    Salut !
                    ça fait longtemps que j’en rêve de cette voie, si toi aussi, je te propose
                    qu’on la fasse ensemble ? J’ai beaucoup grimper dans la vallée de chamonix,
                    j’ai une bonne expérience sur le granite. Mon niveau max en rocher est 8a.
                    En premier ou second de cordée, tout me va, contacte moi !
                </p>
                <button>Contacter</button>
            </div>

            <div className={styles.right_card}>
                {/* <div className={styles.course}><GiMountaintop size="25px" color="#353535" /> Course de rocher</div> */}
                <h3>Nom Montagne - Nom de la voie</h3>
                <p>Niveau min : ED- 6c 6b IV P3 <FaInfoCircle color='#46B3BA' /></p>
                <p>Configuration : Face</p>
                <p>Durée : 2 jours</p>
                <p>1 Personne manquante</p>
                <p>Période: Été</p>
                <div className={styles.pictures}>
                    <div className={styles.image_wraper}><Image className={styles.image} src='/images/directeamericaine1.jpg' layout='fill' objectFit='cover' /></div>
                    <div className={styles.image_wraper}><Image className={styles.image} src='/images/directeamericaine2.jpg' layout='fill' objectFit='cover' /></div>
                    <div className={styles.image_wraper}><Image className={styles.image} src='/images/directeamericaine3.jpg' layout='fill' objectFit='cover' /></div>
                </div>
                <h6>Voir itinéraire sur <a href="#">CamptoCamp</a></h6>
            </div>

        </div>
    )
}