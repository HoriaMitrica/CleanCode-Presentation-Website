import React from 'react';
import Logo from '@/components/Logo';
import style from "./style.module.scss"
import NavbarExtension from '@/components/NavbarExtension';

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className={style.navList}>
                    <li className={style.navItem}><Logo /></li>
                    <li className={style.navItem}><a>Services</a></li>
                    <li className={style.navItem}><a>Industries</a></li>
                    <li className={style.navItem}><a>About Us</a></li>
                    <li className={style.navItem}>
                        <button className={style.button}>Contact us</button>
                    </li>
                </ul>   
            </nav>
            <NavbarExtension />
        </>
    );
};