import styles from '../styles/comps/Comment.module.scss';
import Image from 'next/image';

export default function Comment() {
    return (
        <div className={styles.comments}>
            <h3>Commentaires</h3>
            <div className={styles.content}>
                <div className={styles.user}>
                    <div className={styles.avatar_wraper}>
                        <Image className={styles.avatar} src='/images/person4.jpg' layout='fill' objectFit='cover' />
                        <span className={styles.country}><Image src="/icons/belgium.png" width={15} height={15} alt='country' /></span>
                    </div>
                    <div className={styles.user_infos}>
                        <h6>Nom Prénom</h6>
                        <p>expérience - age</p>
                    </div>
                </div>
                <p className={styles.comment}>Super ascension, Matthias est une chouette personne et à un très bon niveau, nous n’aurions pas fait le sommet sans lui.</p>
                <input type="text" name="" id="" placeholder='Répondre' />
            </div>
        </div>
    )
}