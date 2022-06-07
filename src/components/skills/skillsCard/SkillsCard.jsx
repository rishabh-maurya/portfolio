import React from 'react'
import ShowSkill from './ShowSkill'

const SkillsCard = ({ skillType, skills }) => {
    return (
        <div className='md:max-w-[45%] border-2 border-bgColorVariant bg-bgColorVariant p-10 rounded-[40px]'>
            <h3 className='text-primary text-center text-2xl mb-8'>{skillType}</h3>
            <div className='flex flex-wrap gap-12'>
                {
                    skills.map((skill, index) => <ShowSkill key={index} skill={skill.tech} experience={skill.experience} />)
                }
            </div>
        </div>
    )
}

export default SkillsCard