import React from 'react';
import Navbar from '@components/Navbar';
import Services from '@components/Services';
import Landing from '@components/Landing';
import Technologies from '@components/Technologies';

export default function Home() {

  return (
    <>
      <Navbar />
      <Landing/>
      <Services/>
      <Technologies/>
    </>
  );
};