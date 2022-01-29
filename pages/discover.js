import styles from '../styles/Discover.module.scss';
import NavBar from '../comps/NavBar';
import Image from 'next/image';
import GoogleMap from 'google-map-react';
import ExpCard from '../comps/ExpCard';

import { FaAngleDown, FaMapMarkerAlt } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';

import { useState } from 'react';

export default function Discover() {

    const numbe = [5,5,5,5,5];
    

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

                        {numbe.map(el => <ExpCard open={false} clickable={true} /> )}

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

                        </GoogleMap>
                        {/* <Image className={styles.map_image} src='/images/map.png' layout='fill' objectFit='cover' /> */}
                    </div>
                </div>

            </main>
        </div>
    )
}