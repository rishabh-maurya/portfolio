import React from 'react'
import HeaderSocials from './HeaderSocials'
import profileImg from '../../images/profile-img.png'

const Header = () => {
  return (
    <section id="#">
      <div className='w-full h-screen flex flex-col px-5 justify-evenly md:justify-center items-center'>
        <div className='my-5 md:my-3 bg-gradient rounded-t-full'>
          <img className='sm:h-[350px] md:h-[400px]' src={profileImg} alt="profile-image" />
        </div>

        <HeaderSocials />

        <div className='text-center my-5'>
          <h5 className=''>Hello, I'm</h5>
          <h1 className='text-7xl md:text-8xl py-3 font-ubuntu'>Rishabh</h1>
          <h5>Frontend Developer</h5>
          <div className='py-4 mt-6'>
            <a className='btn' href='https://drive.google.com/u/0/uc?id=1lmtEg3ecJ0RHWPLVxyFoeROgjcQasfV8&export=download' download={true}>Download CV</a>
            <a className='btn bg-transparent ml-2 text-primary' href='#contact'>Hire Me</a>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Header