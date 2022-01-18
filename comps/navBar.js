import Image from 'next/image';

import { FiMail, FiSearch } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Image src='/icons/logo_noir.png' width={100} height={100} />
                <p>Expedition Finder</p>
            </div>
            <div className='menu'>
                <IoIosAddCircleOutline className='add_icon' />
                <div className='search'>
                    <FiSearch size={20} color='#353535' />
                </div>
                <FiMail className='mail_icon' />
                <BiUserCircle className='user_icon' />
            </div>
        </nav>
    )
}