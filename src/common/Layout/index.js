import React, { useState, useEffect } from 'react';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const isMobile = width <= 600;
  return (
    <>
      {
        isMobile ? <MobileHeader /> : <Header />
      }
    </>
  );
}
