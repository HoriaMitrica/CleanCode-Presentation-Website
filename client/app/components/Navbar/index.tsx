"use client"

import React, { useState } from 'react';

import style from "./style.module.scss"

import { Dropdown } from '@/components/Dropdown';
import { Logo } from '@/components/Logo';

import { DropdownData } from '@/models/dropdown';

import { ABOUT_JSON_PATH, INDUSTRY_JSON_PATH, SERVICES_JSON_PATH, TECHNOLOGIES_JSON_PATH } from '@/constants/constants';


export default function Navbar() {

    const [activeDropdown, setActiveDropdown] = useState<DropdownData[]>([]);

    const fetchData = async (path: string) => {
        try {
            const response = await fetch(path);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data: DropdownData[] = await response.json();
            setActiveDropdown(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <nav className={`${style.nav}`}>
                <ul className={style.navList}>
                    <li className={style.navItem}><Logo /></li>
                    <li className={style.navItem}><a onMouseEnter={() => fetchData(SERVICES_JSON_PATH)}
                        onMouseLeave={() => setActiveDropdown([])}>Services</a></li>
                    <li className={style.navItem}><a onMouseEnter={() => fetchData(INDUSTRY_JSON_PATH)}
                        onMouseLeave={() => setActiveDropdown([])}>Industries</a></li>
                        <li className={style.navItem}><a onMouseEnter={() => fetchData(TECHNOLOGIES_JSON_PATH)}
                        onMouseLeave={() => setActiveDropdown([])}>Technologies</a></li>
                    <li className={style.navItem}><a onMouseEnter={() => fetchData(ABOUT_JSON_PATH)}
                        onMouseLeave={() => setActiveDropdown([])}>About Us</a></li>
                    <li className={style.navItem}>
                        <button className={style.button}>Contact us</button>
                    </li>
                </ul>
            </nav>
            {activeDropdown.length>0 && <Dropdown category={activeDropdown} />}
        </>
    );
};