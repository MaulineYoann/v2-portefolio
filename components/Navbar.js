import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link';
import logo from '../public/assets/logo2.png'
import Image from 'next/image'

export default function Navbar() {

  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(!showNav)
  console.log(showNav);

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
              <Link className="items" href='#about'>A propos</Link>
              <Link href='#project' className="items">Projets</Link>
              <Link className="items" href="#contact">Contact</Link>
            </ul>
            <div 
            onClick={handleShowNav}
            className={styles.burger}>
              <GiHamburgerMenu className={styles.burgerIcon}/>
            </div>
        </nav>
        {
           showNav && (
              <section className={styles.sideNav}>
                    <ul>
                      <Link href='/' >
                        <a onClick={handleShowNav}> Acceuil</a></Link>
                      <Link href='#about'>
                        <a onClick={handleShowNav}>A Propos</a>
                        </Link>
                      <Link href='#project' >
                        <a onClick={handleShowNav}>Project</a>
                        </Link>
                      <Link href='#contact' >
                        <a onClick={handleShowNav}>Contact</a>
                        </Link>
                    </ul>
                  </section>
                )
              }
    </header>
  )
}
