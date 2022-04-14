/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/About.module.scss'
import Button from './Button'
import { arraySkill } from '../data/arraySkill'
import Skills from './Skills'

const About = () => {


  return (
    <section className={styles.about}>
        <h1>A Propos</h1>
        <p className={styles.info}>Vous trouverez ici plus d'informations sur moi, ce que je fais et mes compétences actuelles principalement en termes de programmation et de technologie</p>
        <section className={styles.sectionContain}>
            <aside className={styles.presentation}>
                <h2>Faisons connaissance</h2>
                <p>Passioné d'informatique et de programmation c'est tout naturellement que je me reconverti dans ce domaine. <br/>
            Aujourd'hui développeur Front-end je développe des sites, applications web et des solutions pour les entreprises.<br/>
            Toujour en quête de savoir et d'apprentissage je continue à développer mes compétences par la veille et le développement de projets perso. <br/>
             Ouvert aux opportunités professionnels, je serais ravis de pouvoir apporter mes compétences. N'hésiter pas à me contacter.</p>
            <Button name='contacter'/>
            </aside>
            <aside className={styles.skills}>
                <h2>Mes Compétences</h2>
                <div className={styles.skillsList}>
                    {
                        arraySkill.map((skill, index) => (
                            <div key={index}>
                             <Skills skill={skill}/>
                            </div>
                        ))
                    }
                </div>
            </aside>
        </section>
    </section>
  )
}

export default About