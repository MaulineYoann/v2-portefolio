/* eslint-disable @next/next/link-passhref */
import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import profil from '../public/assets/profil.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <hero className={styles.home}>
      <div className={styles.containTitle}>
        <h1 className={styles.title}>
          Bienvenue, <br /> je suis{' '}
          <span className={styles.name}>Yoann Mauline</span>
          <br />
          {
            <Typewriter
              options={{
                strings: [
                  'Développeur Front-end',
                  'Développeur JavaScript',
                  'Consultant Informatique',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          }
        </h1>
        <p>passioné de technologies.</p>
        <p className={styles.useful}>
          Liens utiles:
          <a
            href="https://www.linkedin.com/in/yoann-mauline/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.link} />
          </a>
          <a
            href="https://github.com/MaulineYoann"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.link} />
          </a>
        </p>
      </div>
      <div className={styles.imageContain}>
        <Image src={profil} width={400} height={400} alt="profil" />
      </div>
    </hero>
  );
}

export default Home;
