import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='absolute top-[50%] left-[1%] md:top-[40%] md:left-[5%] flex flex-col gap-2 items-center'>
        <a href="https://github.com/rishabh-maurya" target="_blank">
            <FaGithub className='w-8 h-8' color='#4db5ff' />
        </a>
        <a href="https://www.linkedin.com/in/rishabh-kumar-maurya-39376319b/" target="_blank">
            <FaLinkedin className='w-8 h-8' color='#4db5ff' />
        </a>
        <div className='bg-primary w-[2px] h-10'></div>
    </div>
  )
}

export default HeaderSocials