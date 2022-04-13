import React from 'react'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import profil from '../public/assets/profil.png'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.containTitle}>
      <h1 className={styles.title}>Bonjour je suis Yoann Mauline<br/> Développeur Web React/Express.js
      </h1>
      <Image 
      src={profil} 
      alt="photo de profil" 
      className={styles.profil}
      height={200}
      width={200}
      layout="responsive"
      />
      </div>
    </div>
  )
}

export default Home