import React from 'react'
import Me from '../images/about-me.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <div className='md:h-screen px-[50px] md:px-[150px] py-10 flex flex-col items-center justify-center gap-10'>
        <div>
          <h5 className='text-center'>Get To Know</h5>
          <h1 className='text-center text-4xl py-2 text-primary'>About Me</h1>
        </div>
        <div className='flex justify-between items-center gap-10 flex-wrap'>
          <div className='mx-auto'>
            <div className='h-[280px] w-[280px] bg-primary rounded-lg'>
              <img className='object-cover w-full h-full rounded-lg rotate-12 hover:rotate-0 transition ease-in-out delay-75' src={Me} alt="" />
            </div>
          </div>

          <div className='w-full md:w-[65%] mx-auto flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
              <div className='text-center w-[250px] p-10 bg-bgColorVariant border-2 border-bgColorVariant hover:bg-transparent rounded-xl'>
                <FaAward className='h-8 w-8 mx-auto mb-3 text-primary'/>
                <h3 className='text-2xl py-2'>Experience</h3>
                <p className='text-light'>Fresher</p>
              </div>

              <div className='text-center w-[250px] p-10 bg-bgColorVariant border-2 border-bgColorVariant hover:bg-transparent rounded-xl'>
                <FiUsers className='h-8 w-8 mx-auto mb-3 text-primary' />
                <h3 className='text-2xl py-2'>Clients</h3>
                <p className='text-light'>2+</p>
              </div>

              <div className='text-center w-[250px] p-10 bg-bgColorVariant border-2 border-bgColorVariant hover:bg-transparent rounded-xl'>
                <VscFolder className='h-8 w-8 mx-auto mb-3 text-primary' />
                <h3 className='text-2xl py-2'>Projects</h3>
                <p className='text-light'>20+ Completed</p>
              </div>
            </div>

            <p className='py-8 md:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestiae doloribus distinctio cupiditate repudiandae impedit odio vero facere labore, ratione error suscipit harum iusto sit beatae sequi nisi qui numquam!</p>
            <a href='#contact' className='btn md:self-start'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About