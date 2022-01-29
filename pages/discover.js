import styles from '../styles/Discover.module.scss';
import NavBar from '../comps/NavBar';
import Image from 'next/image';
import GoogleMap from 'google-map-react';
import ExpCard from '../comps/ExpCard';

import { FaAngleDown, FaMapMarkerAlt } from 'react-icons/fa';
import { GiMountaintop } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { RiMenLine } from 'react-icons/ri';


import { useState } from 'react';

export default function Discover() {

    const numbe = [5, 5, 5, 5, 5];
    const [pinInfos, setPinInfos] = useState('none')



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

                        {numbe.map(el => <ExpCard open={false} clickable={true} />)}

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
                        <GoogleMap
                            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP }}
                            defaultCenter={{
                                address: 'Rue Claude Strebelle, 4031 Angleur, Belgium',
                                lat: 50.588420,
                                lng: 5.570870,
                            }}
                            defaultZoom={12}
                        >

                            <div className={styles.exp_pin} lat={50.588420} lng={5.570870} text='Home' onClick={() => pinInfos === 'none' ? setPinInfos('block') : setPinInfos('none')}>
                                <GiMountaintop size="2.5vmin" color="#353535" />
                                <div className={styles.exp_infos} style={{'display': pinInfos}}>
                                    <div className={styles.user}>
                                        <div className={styles.avatar_wraper}>
                                            <Image className={styles.image} src="/images/person4.jpg" layout="fill" objectFit='cover' />
                                        </div>
                                        <div className={styles.name}>
                                            <p>Nom Prénom <RiMenLine /></p>
                                            <p>Confirmé - 23 ans</p>
                                        </div>
                                    </div>
                                    <hr className={styles.hr} />
                                    <h6>Nom montagne - Nom de la voie</h6>
                                </div>
                            </div>

                        </GoogleMap>
                    </div>
                </div>

            </main>
        </div>
    )
}