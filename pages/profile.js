import styles from '../styles/Profile.module.scss';
import NavBar from '../comps/navBar';
import ExpDone from '../comps/ExpDone';
import ExpPosted from '../comps/ExpPosted';
import Comment from '../comps/Comment';

import { useState } from 'react';

import { FaRegEdit, FaMountain } from 'react-icons/fa';
import { RiMenLine } from 'react-icons/ri';
import { GiMountainClimbing, GiRoundStar, GiWarPick, GiMountaintop } from 'react-icons/gi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

export default function Profile() {

    const text = 'Salut, Moi c’est Matthias, j’arpente les montagnes depuis un bon bout de temps maintenant. J’ai un bon niveau en rocher et surtout un bon sang-froid en montagne. Je suis tout à fait à l’aise en premier comme en second. Je suis toujours à la recherche de nouveaux partenaires pour partir en montagne, si t’as un projet qui match, ça te dise qu’on parte ensemble ? Fille ou garçon, débutant ou expert, peu importe.'
    const [textShowed, setTextShowed] = useState(TextAbstract(text, 220))


    function TextAbstract(text, length) {
        if (text.length <= length) return text; // if text is inferior at length don't need to wrap it

        text = text.substring(0, length); // substract the string to be 220 char max
        return text + "..."; // return the string with ...
    }

    const showText = (text) => { // when click to show the text not wrapped
        // if the text is already showed, wrap it, otherwise show it
        textShowed === text ? setTextShowed(TextAbstract(text, 220)) : setTextShowed(text);
    }

    return (
        <div className={styles.container}>

            <NavBar />

            <main>

                {/* left card with profile info */}
                <div className={styles.profile_info}>
                    <h2>Profile <FaRegEdit color="#353535" /></h2>
                    <div className={styles.user_infos}>
                        <div className={styles.avatar_wraper}>
                            <Image className={styles.avatar} src='/images/person4.jpg' layout='fill' objectFit='cover' />
                            <span className={styles.country}><Image src="/icons/belgium.png" width={20} height={20} alt='country' /></span>
                        </div>
                        <div className={styles.infos}>
                            <h6>Prénom Nom</h6>
                            <p>Age <RiMenLine size="17px" color="#353535" style={{ 'margin-left': '15px' }} /></p>
                            <p>Langues/Langues</p>
                        </div>
                    </div>
                    <div className={styles.date}>Membre depuis le 17/12/2021</div>
                    <div className={styles.level}>
                        <p>Niveau Général : Confirmé</p>
                        <p><GiMountainClimbing color="#353535" size="3vh" style={{ 'margin-right': '20px' }} />Rocher : 7b</p>
                        <p><GiWarPick color="#353535" size="3vh" style={{ 'margin-right': '20px' }} />Glace : 5</p>
                        <p><GiMountaintop color="#353535" size="3vh" style={{ 'margin-right': '20px' }} />Montagne : ED</p>
                    </div>
                    <hr />
                    <div className={styles.links}><GiRoundStar color="#353535" size="3vh" style={{ 'margin-right': '20px' }} /><a href="#">12 Avis</a></div>
                    <div className={styles.links}><FaMountain color="#353535" size="3vh" style={{ 'margin-right': '20px' }} /><a href="#">12 Expéditions finies</a></div>
                    <div className={styles.links}><FaMountain color="#353535" size="3vh" style={{ 'margin-right': '20px' }} /><a href="#">3 Expéditions postées</a></div>
                    <div className={styles.links}><HiOutlineIdentification color="#353535" size="3vh" style={{ 'margin-right': '20px' }} />Identité vérifiée</div>
                    <p className={styles.description}>
                        {textShowed}
                    </p>
                    <div onClick={() => showText(text)} className={styles.see_all}>
                        <p>Voir Tout</p>
                        <FiChevronDown color="#353535" />
                    </div>
                </div>

                {/* right card with the content of the profile */}
                <div className={styles.profile_content}>
                    <div className={styles.header}>
                        {/* <h2>Expéditions postées</h2>
                        <h4>+ Proposer une nouvelle expédition</h4> */}
                        {/* <h2>Expéditions finies</h2> */}
                        {/* <h4>+ Ajouter une ancienne expédition</h4> */}
                    </div>

                    <Comment />
                    {/* {<ExpDone />} */}
                    {/* {<ExpPosted />} */}

                </div>
            </main>
        </div>
    )
}