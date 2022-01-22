import styles from '../styles/Profile.module.scss';
import NavBar from '../comps/navBar';

import { useState } from 'react';

import { FaRegEdit, FaMountain, FaInfoCircle } from 'react-icons/fa';
import { RiMenLine } from 'react-icons/ri';
import { GiMountainClimbing, GiRoundStar, GiWarPick, GiMountaintop } from 'react-icons/gi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { BsCheck2Circle } from 'react-icons/bs';
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
                            <p>Age <RiMenLine size="17px" color="#353535" style={{'margin-left': '15px'}} /></p>
                            <p>Langues/Langues</p>
                        </div>
                    </div>
                    <div className={styles.date}>Membre depuis le 17/12/2021</div>
                    <div className={styles.level}>
                        <p>Niveau Général : Confirmé</p>
                        <p><GiMountainClimbing color="#353535" size="3vh" style={{'margin-right': '20px'}} />Rocher : 7b</p>
                        <p><GiWarPick color="#353535" size="3vh" style={{'margin-right': '20px'}} />Glace : 5</p>
                        <p><GiMountaintop color="#353535" size="3vh" style={{'margin-right': '20px'}} />Montagne : ED</p>
                    </div>
                    <hr />
                    <div className={styles.links}><GiRoundStar color="#353535" size="3vh" style={{'margin-right': '20px'}} /><a href="#">12 Avis</a></div>
                    <div className={styles.links}><FaMountain color="#353535" size="3vh" style={{'margin-right': '20px'}} /><a href="#">12 Expéditions finies</a></div>
                    <div className={styles.links}><FaMountain color="#353535" size="3vh" style={{'margin-right': '20px'}} /><a href="#">3 Expéditions postées</a></div>
                    <div className={styles.links}><HiOutlineIdentification color="#353535" size="3vh" style={{'margin-right': '20px'}} />Identité vérifiée</div>
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
                        <h2>Expéditions finies</h2>
                        <h4>+ Ajouter une ancienne expédition</h4>
                    </div>
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
                    </div>
                </div>
            </main>
        </div>
    )
}