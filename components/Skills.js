/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Skills = ({skill}) => {

  const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 16px;
  }
  `
  return (
    <Contain >
        <Image 
        src={skill.logo}
        heigth={40}
        width={40}
        alt='logo de compétence'
        />
      <p>{skill.name}</p>  
    </Contain>
  )
}

export default Skills