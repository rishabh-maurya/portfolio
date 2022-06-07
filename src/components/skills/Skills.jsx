import React, { useState } from 'react'
import SkillsCard from './skillsCard/SkillsCard'

const Skills = () => {

  const [frontEndSkills, setFrontEndSkills] = useState([
    {
      tech: 'HTML',
      experience: 'Experienced'
    },
    {
      tech: 'CSS',
      experience: 'Intermediate'
    },
    {
      tech: 'JavaScript',
      experience: 'Experienced'
    },
    {
      tech: 'React.js',
      experience: 'Intermediate'
    },
    {
      tech: 'BootStrap',
      experience: 'Experienced'
    },
    {
      tech: 'Material UI',
      experience: 'Intermediate'
    },
    {
      tech: 'Tailwind CSS',
      experience: 'Intermediate'
    },
  ])

  const [otherSkills, setOtherSkills] = useState([
    {
      tech: 'Java',
      experience: 'Intermediate'
    },
    {
      tech: 'Data Structures',
      experience: 'Intermediate'
    },
    {
      tech: 'Algorithms',
      experience: 'Intermediate'
    },
    {
      tech: 'Node.js',
      experience: 'Basic'
    },
    {
      tech: 'Social Media',
      experience: 'Experienced'
    },
    {
      tech: 'PHP',
      experience: 'Basic'
    },
    {
      tech: 'Canva',
      experience: 'Experienced'
    },
  ])

  return (
    <section id="skills" className='min-h-screen'>
      <div className='px-[10px] md:px-[150px] py-10 flex flex-col items-center justify-center gap-10'>
        <div className='text-center'>
          <h5 className=''>What skills I have</h5>
          <h1 className='text-4xl py-2 text-primary'>My Skills</h1>
        </div>

        <div className='flex flex-wrap gap-5 justify-center items-center'>
          <SkillsCard skillType='FrontEnd Development' skills={frontEndSkills} />
          <SkillsCard skillType='Other Skills' skills={otherSkills} />
        </div>
      </div>

    </section>
  )
}

export default Skills