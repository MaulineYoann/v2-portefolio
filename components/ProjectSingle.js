/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectSingle.module.scss';

export const ProjectSingle = ({ project }) => {
  return (
    <section className={styles.projectSingle}>
      <Image
        src={project.image}
        max-height={320}
        max-width={320}
        alt={project.name}
      />
      <div className={styles.infoProject}>
        <h4>{project.techno}</h4>
        <p className={styles.desc}>{project.description}</p>
      </div>
      <div className={styles.containButton}>
        <div className={styles.containLink}>
          <a href={project.github} target="_blank">
            Github
          </a>
        </div>
        <div className={styles.containLink}>
          <a href={project.web} target="_blank">
            Site Web
          </a>
        </div>
      </div>
    </section>
  );
};
