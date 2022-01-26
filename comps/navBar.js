import styles from '../styles/comps/NavBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { FiMail, FiSearch } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.logo}>
                    <Image src='/icons/logo_noir.png' width={100} height={100} />
                    <p>Expedition Finder</p>
                </div>
            </Link>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <FiSearch size={20} color='#353535' />
                </div>
                <Link href="/discover"><HiOutlineHome className={styles.add_icon} /></Link>
                <FiMail className={styles.mail_icon} />
                <Link href="/profile"><BiUserCircle className={styles.user_icon} /></Link>
            </div>
        </nav>
    )
}