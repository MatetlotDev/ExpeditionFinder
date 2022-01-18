import styles from '../styles/Discover.module.scss';
import NavBar from '../comps/navBar';
import Image from 'next/image'

import { FaAngleDown, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';
import { RiMenLine } from 'react-icons/ri';
import { GiMountaintop } from 'react-icons/gi';

import { useState } from 'react';

export default function Discover() {

    const [smCard, setsmCard] = useState('flex');
    const [lgCard, setlgCard] = useState('none');

    const openCard = () => {
        if (smCard === 'flex') {
            setsmCard('none');
            setlgCard('flex');
        } else {
            setsmCard('flex');
            setlgCard('none');
        }
    }

    return (
        <div className={styles.container}>

            <NavBar />

            <main>
                {/* left side */}
                <div className={styles.left}>

                    {/* filters */}
                    <div className={styles.filters}>
                        <div className={styles.select_filter}>
                            <FaAngleDown color='#353535' />
                            Filter
                        </div>
                        <div className={styles.filter}><VscChromeClose />22 - 35 ans</div>
                        <div className={styles.filter}><VscChromeClose />Confirmé</div>
                    </div>

                    {/* cards */}
                    <div className={styles.cards}>

                        <div className={styles.card} onClick={() => openCard()} >
                            <div style={{ 'display': smCard }}>
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
                                <div className={styles.route_infos}>
                                    <div className={styles.course}><GiMountaintop size="25px" color="#353535" /> Course de rocher</div>
                                    <span>Nom Montagne - Nom de la voie</span>
                                </div>
                            </div>

                            <div style={{ 'display': lgCard }}>
                                <div className={styles.card_left}>
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

                                <div className={styles.card_right}>
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

                        </div>


                    </div>
                </div>

                {/* right side */}
                <div className={styles.right}>
                    <div className={styles.header}>
                        <div className={styles.location}>
                            <FaMapMarkerAlt color="#353535" />
                            <span>Liège, Belgium</span>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <Image className={styles.map_image} src='/images/map.png' layout='fill' objectFit='cover' />
                    </div>
                </div>

            </main>
        </div>
    )
}