/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


export const ProjectSingle = ({project}) => {

    const Contain = styled.div`
        border: 3px solid #000;
        max-height: 400px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        .infoProject {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #000;
            height: 80px;
            .name {
                color: #0077b6;
                font-weight: bold;
            }
            .techno {
                width: 40%;
                height: 100%;
                border-left: 1px solid #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                p {
                }
            }
        }
        .containButton {
            height: 50px;
            text-align: center;
            padding: 30px;
        }
    `
  return (
    <Contain>
        <Image 
        src={project.image} 
        max-height={300}
        max-width={300}
        alt={project.name} 
        />
        <div className="infoProject">
            <p className='name'>{project.name}</p>
            <p className='techno'>
                techno utilisé :
                {project.techno.map((tech, index) => (
                    <span key={index}> {tech}</span>
                ))}
            </p>
        </div>
        <p className='desc'>{project.description}</p>
        <div className='containButton'>

        </div>
    </Contain>
  )
}
