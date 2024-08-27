"use client"

import React, { useState } from 'react'
import style from './style.module.scss';
import Card from '@components/Card';
import RedirectButton from '@components/RedirectButton';
import { MenuProps } from '@models/menu';
import { MenuItemProps } from '@models/menuItem';
import { CardProps } from '@models/card';

const DisplayMenu: React.FC<MenuProps> = ({ menuItems }) => {

    const [activeMenuItem, setActiveMenuItem] = useState<MenuItemProps>(menuItems[0]);
    const handleMenuChange=(index:number)=>{
        setActiveMenuItem(menuItems[index]);
    }

    return (

        <section className={style.section}>
            <div className={style.topSection}>
                <h1>Services</h1>
                <RedirectButton text={"TEST"} path={"/"} />
            </div>

            <div className={style.bottomSection}>   

                <div className={style.leftSide}>
                    {menuItems.map((menuItem: MenuItemProps, index: number) => <div className={`${style.itemsListChild}`}onClick={()=>handleMenuChange(index)} key={index}>{menuItem.name}</div>)}
                </div>

                <div className={style.rightSide}>
                    <h2 className={style.menuItemName}>{activeMenuItem.name}</h2>
                    <div className={style.cardContainer}>
                    {activeMenuItem.cards.map((card: CardProps, index: number) => (
                        <Card key={index} {...card} />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DisplayMenu