import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')

  return (
    <nav className='w-[max-content] h-10 p-6 mx-auto flex 
    justify-evenly items-center gap-4 rounded-lg 
    bg-[#00000030] fixed z-10 top-[93%] left-[50%] 
    translate-x-[-50%] backdrop-blur-lg'>
      <a className={activeNav === '#' ? 'active nav-items' : 'nav-items'} href="#" onClick={() => setActiveNav('#')}><AiOutlineHome className='w-6 h-6' /></a>
      <a className={activeNav === '#about' ? 'active nav-items' : 'nav-items'} href="#about" onClick={() => setActiveNav('#about')}><AiOutlineUser className='w-6 h-6' /></a>
      <a className={activeNav === '#skills' ? 'active nav-items' : 'nav-items'} href="#skills" onClick={() => setActiveNav('#skills')}><BiBook className='w-6 h-6' /></a>
      <a className={activeNav === '#projects' ? 'active nav-items' : 'nav-items'} href="#projects" onClick={() => setActiveNav('#projects')}><RiServiceLine className='w-6 h-6' /></a>
      <a className={activeNav === '#contact' ? 'active nav-items' : 'nav-items'} href="#contact" onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail className='w-6 h-6' /></a>
    </nav>
  )
}

export default Nav