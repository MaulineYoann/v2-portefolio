import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link';
import logo from '../public/assets/logo2.png'
import Image from 'next/image'

export default function Navbar() {

  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(!showNav)

  return (
    <header className={styles.header}>
        <nav>
            <Image 
            src={logo}
            alt='logo'
            height={100}
            width={100}
            />
            <ul className="box-contain">
              <Link href='/' className="items">Acceuil</Link>
              <li className="items">A propos</li>
              <Link href='/project' className="items">Projets</Link>
              <li className="items">Contact</li>
            </ul>
            <div 
            onClick={handleShowNav}
            className={styles.burger}>
              <GiHamburgerMenu className='menu-burger'/>
            </div>
        </nav>
        {
           showNav && (
              <div className={styles.sideNav}>
                    <ul>
                      <li onClick={handleShowNav}>Acceuil</li>
                      <li onClick={handleShowNav}>Projets</li>
                      <li onClick={handleShowNav}>A Propos</li>
                      <li onClick={handleShowNav}>Contact</li>
                    </ul>
                  </div>
                )
              }
    </header>
  )
}
