import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='bg-primary px-10 py-16'>
      <ul className='flex justify-center items-center md:flex-row sm:flex-row sm:gap-5 flex-col md:gap-10 gap-2 flex-wrap'>
        <li><a className='text-bgColor font-medium' href="#">Home</a></li>
        <li><a className='text-bgColor font-medium' href="#about">About</a></li>
        <li><a className='text-bgColor font-medium' href="#skills">Skills</a></li>
        <li><a className='text-bgColor font-medium' href="#projects">Projects</a></li>
        <li><a className='text-bgColor font-medium' href="#contact">Contact</a></li>
      </ul>

      <div className='py-5 flex justify-center items-center gap-5'>
        <a href="https://github.com/rishabh-maurya" target='_blank' className='p-2 rounded-full bg-bgColor'><FiGithub className='w-6 h-6 text-primary' /></a>
        <a href="https://www.linkedin.com/in/rishabh-kumar-maurya-39376319b/" target='_blank' className='p-2 rounded-full bg-bgColor'><RiLinkedinFill className='w-6 h-6 text-primary' /></a>
        <a href="https://www.instagram.com/rishabhmaurya.in/" target='_blank' className='p-2 rounded-full bg-bgColor'><BsInstagram className='w-6 h-6 text-primary' /></a>
      </div>

      <div className='text-center text-bgColorVariant'>
        <small>&copy; Rishabh, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer