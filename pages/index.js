import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Index.module.scss';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import logo from '../public/assets/logo2.png';
import Contact from '../components/Contact';
import React from 'react';

export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yoann Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={logo} />
      </Head>
      <React.Fragment className={styles.container}>
        <Home />
        <div id="about">
          <About />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </React.Fragment>
    </div>
  );
}
