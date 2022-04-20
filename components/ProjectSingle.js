/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from './Button';
import styles from '../styles/ProjectSingle.module.scss';

export const ProjectSingle = ({ project }) => {
  const Contain = styled.div`
    /* border: 3px solid #000; */
    height: 450px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    box-shadow: 21px 10px 13px -8px rgba(0, 0, 0, 0.45);
    .infoProject {
      padding: 20px 15px 30px 15px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h4 {
        width: 90px;
        border-radius: 10px;
        font-size: 1.6rem;
        font-weight: bold;
        color: #0077b6;
        margin: 0 auto;
        text-align: center;
      }
      .desc {
        height: 100px;
        color: #000;
        font-weight: bold;
        padding: 0 15px;
        font-size: 1.5rem;
        letter-spacing: 1.4px;
      }
    }
    .containButton {
      padding: 15px;
      background-color: #000;
      display: flex;
      width: auto;
      .contain-link {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: #fff;
          font-size: 1.4rem;
          font-weight: bold;
          letter-spacing: 1.5px;
          transition: 500ms;
          &:hover {
            transform: scale(1.2);
            color: #0077b6;
          }
        }
      }
    }
  `;
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
