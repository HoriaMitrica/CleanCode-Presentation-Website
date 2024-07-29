"use client"

import React, { useRef, useState } from 'react';

import style from "./style.module.scss"

import { Dropdown } from '@/components/Dropdown';
import { Logo } from '@/components/Logo';

import { DropdownData } from '@/models/dropdown';

import { ABOUT_JSON_PATH, INDUSTRY_JSON_PATH, SERVICES_JSON_PATH, TECHNOLOGIES_JSON_PATH } from '@/constants/constants';


export default function Navbar() {

    const [activeDropdown, setActiveDropdown] = useState<DropdownData[]>([]);
    const navRef = useRef<HTMLDivElement>(null);
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

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActiveDropdown([]);
        }, 500);
    };
    console.log(navRef.current?.style.height);
    return (
        <>
            <nav ref={navRef} className={`${style.nav} ${activeDropdown.length>0 ? style.expand : style.shrink}`}>
                <ul className={style.navList}>
                    <li className={style.navItem}><Logo /></li>
                    <li className={style.navItem}><a onMouseEnter={() => fetchData(SERVICES_JSON_PATH)}
                    >Services</a></li>
                    <li className={style.navItem}><a onMouseEnter={() => fetchData(INDUSTRY_JSON_PATH)}
                    >Industries</a></li>
                    <li className={style.navItem}><a onMouseEnter={() => fetchData(ABOUT_JSON_PATH)}
                    >About Us</a></li>
                    <li className={`${style.navItem}`}>
                        <button className={style.button}>Contact us</button>
                    </li>
                </ul>

                {activeDropdown.length > 0 &&
                    <div onMouseLeave={handleMouseLeave}>
                        <Dropdown category={activeDropdown} />
                    </div>  
                }
            </nav>
        </>
    );
};