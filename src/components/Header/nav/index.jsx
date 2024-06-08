'use client'

import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'
import { menuSlide } from '../anim';
import Link from './link';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  useEffect(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div 
          onMouseLeave={() => setSelectedIndicator(pathname)} 
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              data={{...item, index}} 
              isActive={selectedIndicator === item.href} 
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <div className={styles.footer}>
          {["Awwwards", "Instagram", "Dribble", "LinkedIn"].map((text, index) => (
            <a key={index}>{text}</a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
