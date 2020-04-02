import React from 'react';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

export default function Layout() {
  const isMobile = window.innerWidth <= 600;
  console.log(window.innerWidth,isMobile)
  return (
    <>
      {
        isMobile ? <MobileHeader /> : <Header />
      }
    </>
  );
}
