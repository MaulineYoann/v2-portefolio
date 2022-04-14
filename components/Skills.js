/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const Skills = ({skill}) => {
  return (
    <div>
        <Image 
        src={skill.logo}
        heigth={40}
        width={40}
        alt='logo de compétence'
        />
        {skill.name}
    </div>
  )
}

export default Skills