import React from 'react';
import MyImage from '@/public/clean_code_text.svg';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <>  
      <MyImage className={styles.svg} />
    </>
  );
};
