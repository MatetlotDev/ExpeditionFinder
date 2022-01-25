import styles from '../styles/comps/ExpDone.module.scss';
import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaInfoCircle } from 'react-icons/fa';
import Comment from './Comment';

export default function ExpDone() {
    return (
        <div className={styles.card}>
            <div className={styles.exp_state}>
                <BsCheck2Circle />
                <span>Ascension Réussie</span>
            </div>
            <div className={styles.preview}>
                <h3>Aperçu</h3>
                <div className={styles.content}>
                    <p>11/02/2021</p>
                    <h2>Nom Montagne - Nom de la voie</h2>
                    <div className={styles.specs}>
                        <p>Niveau min: ED- 6c 6b 5 <FaInfoCircle color='#46B3BA' /></p>
                        <p>Configuration: Face</p>
                        <p>Durée: 2 jours</p>
                    </div>
                    <div className={styles.pics}>
                        <div className={styles.image_wraper}>
                            <Image className={styles.image} src='/images/directeamericaine1.jpg' layout='fill' objectFit='cover' />
                        </div>
                        <div className={styles.image_wraper}>
                            <Image className={styles.image} src='/images/directeamericaine2.jpg' layout='fill' objectFit='cover' />
                        </div>
                        <div className={styles.image_wraper}>
                            <Image className={styles.image} src='/images/directeamericaine3.jpg' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                    <h6>Voir itinéraire sur <a href="#">CampToCamp</a></h6>
                </div>
            </div>
            {<Comment />}
        </div>
    )
}