import React from 'react';
import MyLogo from '@/public/logo_color.svg';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <>  
      <MyLogo className={styles.svg}/>
    </>
  );
};
