import styles from '../styles/comps/ExpPosted.module.scss';
import ExpCard from './ExpCard';

import { FaRegEdit } from 'react-icons/fa'

export default function ExpPosted() {
    return (
        <div className={styles.card_container}>
            <div className={styles.header}>
                <h3>Aperçu</h3>
                <FaRegEdit color="#353535" size="3vh" />
            </div>
            <ExpCard open={true} clickable={false} />
        </div>
    )


}