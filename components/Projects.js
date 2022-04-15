import React from 'react'
import styles from '../styles/Projects.module.scss'
import { projectDetail } from '../data/fetchProject'
import { ProjectSingle } from './ProjectSingle'


const Projects = () => {
  return (
    <section className={styles.projects}>
        <h1>Projets</h1>
        <p>Voici une selection de quelques-uns de mes projets perso</p>
        <div className={styles.containProject}>
          {
            projectDetail.map((project, index) => (
              <div key={index}>
                <ProjectSingle project={project}/>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Projects