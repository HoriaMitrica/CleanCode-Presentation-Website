"use client"

import React, { useState } from 'react';

import style from "./style.module.scss"

import { Dropdown } from '@/components/Dropdown';
import { Logo } from '@/components/Logo';

export default function Navbar() {
    const services: String[] = ["service1", "service2"];
    const industry: String[] = ["industry1"];
    const aboutUs: String[] = ["about1", "about2", "about3"];

    const [activeDropdown, setActiveDropdown] = useState<String[]>([])
    return (
        <>
            <nav>
                <ul className={style.navList}>
                    <li className={style.navItem}><Logo /></li>
                    <li className={style.navItem}><a onMouseEnter={() => setActiveDropdown(services)}
                        onMouseLeave={() => setActiveDropdown([])}>Services</a></li>
                    <li className={style.navItem}><a onMouseEnter={() => setActiveDropdown(industry)}
                        onMouseLeave={() => setActiveDropdown([])}>Industries</a></li>
                    <li className={style.navItem}><a onMouseEnter={() => setActiveDropdown(aboutUs)}
                        onMouseLeave={() => setActiveDropdown([])}>About Us</a></li>
                    <li className={style.navItem}>
                        <button className={style.button}>Contact us</button>
                    </li>
                </ul>
            </nav>
            {console.log(activeDropdown)}
            <Dropdown category={activeDropdown} />
        </>
    );
};