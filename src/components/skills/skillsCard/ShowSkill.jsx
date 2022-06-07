import React from 'react'
import { MdVerified } from 'react-icons/md'

const ShowSkill = ({ skill, experience }) => {
    return (
        <div className='w-[200px]'>
            <h3 className='text-[1.2rem]'><MdVerified className='inline text-primary mr-2' /> { skill }</h3>
            <p className=' ml-8 text-light'>{experience}</p>
        </div>
    )
}

export default ShowSkill