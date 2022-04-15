/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


export const ProjectSingle = ({project}) => {

    const Contain = styled.div`
        border: 3px solid #000;
        background-color: #000;
        max-height: 500px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: 15px;
        .desc {
            padding: 30px;
            font-size: 1.4rem;
            border-bottom: 2px solid #fff;
        }
        .containButton {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
            button {
                height: 35px;
                width: 150px;
                color: #fff;
                font-size: 1.3rem;
                border-radius: 4px;
                cursor: pointer;
                background-color: #0077b6;
                box-shadow: 5px 5px 5px #0077b6;
            }
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
        <p className='desc'>{project.description}</p>
        <div className='containButton'>
            <button>
                <a href={project.github} target="_blank">Code Github</a>
            </button>
            <button>
                <a href={project.web} target='_blank'>Site Web</a>
            </button>
        </div>
    </Contain>
  )
}
