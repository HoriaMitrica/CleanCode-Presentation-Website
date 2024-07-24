import React from 'react';
import style from "./style.module.scss"
import { DropdownProps } from '@/models/dropdown';

export const Dropdown:React.FC<DropdownProps> = ({ category }) => {
  return (
    <div className={`${style.dropdown}`}>
      <ul>
        {category.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
