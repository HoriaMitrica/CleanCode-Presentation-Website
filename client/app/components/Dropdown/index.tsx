'use client'

import React, { useState } from 'react';
import style from "./style.module.scss"
import { DropdownProps } from '@models/dropdown';
import {CSSTransition} from "react-transition-group";

const Dropdown:React.FC<DropdownProps> = ({category}) => {
const [activeMenu, setActiveMenu]=useState<string>("main");
  return (
    <div className={`${style.dropdown}`}>
      <CSSTransition in={activeMenu==="main"} unmountOnExit timeout={500} classNames={`${style.menuPrimary}`}>
      <ul>
        {category.map((value, index) => (
          <li className={`${style.text}`} key={index}>{value.name}</li>
        ))}
      </ul>
      </CSSTransition>
    </div>
  );
};
export default Dropdown;