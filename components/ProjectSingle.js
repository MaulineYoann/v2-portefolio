/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from './Button';

export const ProjectSingle = ({ project }) => {
  const Contain = styled.div`
    /* border: 3px solid #000; */
    height: 450px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
    color: #000;
    background-color: #fff;
    box-shadow: 21px 10px 13px -8px rgba(0,0,0,0.45);
    .infoProject {
        padding: 20px 15px 30px 15px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        h4 {
            background-color: #0077b6;
            width: 90px;
            padding: 0 auto;
            border-radius: 10px;
            font-size: 1.6rem;
            font-weight: bold;
            color: #fff;
            margin: 0 auto;
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
         background-color: #fff;
         display: flex;
         width: auto;
         .contain-link {
           width: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
           transition: 300ms;

           a {
                color: #000;
                font-size: 1.4rem;
                font-weight: bold;
                letter-spacing: 1.5px;
                &:hover {
                    transform: scale(1.2);
                }
             }
         }
    }
  `;
  return (
    <Contain>
      <Image
        src={project.image}
        max-height={320}
        max-width={320}
        alt={project.name}
      />
      <div className='infoProject'>
          <h4>{project.techno}</h4>
          <p className='desc'>{project.description}</p>
      </div>
      <div className="containButton">
          <div className="contain-link">
          <a href={project.github}>Github</a>
          </div>
          <div className="contain-link">
          <a href={project.web}>Site Web</a>
          </div>
      </div>
      
    </Contain>
  );
};
