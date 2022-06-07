import React, { useState } from 'react'
import ProjectCard from './projectCards/ProjectCard'

const Projects = () => {

  const [projectsInfo, setProjectsInfo] = useState([
    {
      name: 'Portfolio Website',
      img: 'https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017981_960_720.png',
      tech: ['React.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/rishabh-maurya/to-do-list',
      projectLink: 'https://rishabh-maurya.github.io/to-do-list/'
    },
    {
      name: 'Todo List',
      img: 'https://img.freepik.com/free-vector/giant-check-list_23-2148083740.jpg?size=338&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['React.js', 'CSS'],
      githubLink: 'https://github.com/rishabh-maurya/to-do-list',
      projectLink: 'https://rishabh-maurya.github.io/to-do-list/'
    },
    {
      name: 'Weather App',
      img: 'https://img.freepik.com/free-vector/big-pines-nature-scene-background_1308-45969.jpg?size=626&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['React.js', 'API', 'CSS'],
      githubLink: 'https://github.com/rishabh-maurya/weather-app',
      projectLink: 'https://rishabh-weather-app.netlify.app'
    },
    {
      name: 'User Authentication',
      img: 'https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5458.jpg?size=338&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['React.js', 'BootStrap', 'CSS'],
      githubLink: 'https://github.com/rishabh-maurya/registrationform',
      projectLink: 'https://rishabh-maurya.github.io/registrationform/'
    },
    {
      name: 'Typing Game',
      img: 'https://img.freepik.com/free-photo/girl-using-notebook-computer-laptop-home_554837-261.jpg?size=626&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/typing-game.github.io',
      projectLink: 'https://rishabh-maurya.github.io/typing-game.github.io/'
    },
    {
      name: 'Digital Clock',
      img: 'https://img.freepik.com/free-vector/digital-alarm-clock-flat-design-illustration_16734-402.jpg?size=338&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/digital-clock.github.io',
      projectLink: 'https://rishabh-maurya.github.io/digital-clock.github.io/'
    },
    {
      name: 'Iphone Calculator Clone',
      img: 'https://img.freepik.com/free-vector/indian-rupee-currency-exchange_23-2148009223.jpg?size=338&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/IphoneCalculatorClone',
      projectLink: 'https://rishabh-maurya.github.io/IphoneCalculatorClone/'
    },
    {
      name: 'BMI Calculator',
      img: 'https://img.freepik.com/free-vector/girl-standing-scale-flat-vector-illustration-woman-trying-control-weight-with-help-diet-body-mass-index-chart-with-normal-overweight-obese-color-blocks-underweight-bmi-fitness-concept_74855-23056.jpg?size=626&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/BMI-Calculator',
      projectLink: 'https://rishabh-bmi-calculator.netlify.app/'
    },
    {
      name: 'Number Guessing Game',
      img: 'https://img.freepik.com/free-vector/jelly-colorful-alphabet-numbers_96037-157.jpg?size=626&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/Guess-Number-Game',
      projectLink: 'https://rishabh-maurya.github.io/Guess-Number-Game/'
    },
    {
      name: 'Bank Interest Management',
      img: 'https://img.freepik.com/free-vector/isometric-money-saving-concept-background_52683-6820.jpg?size=626&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/BankInterestManagement',
      projectLink: 'https://rishabh-maurya.github.io/BankInterestManagement/'
    },
    {
      name: 'Order Status Management',
      img: 'https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?size=626&ext=jpg&uid=R26870891&ga=GA1.2.1998206210.1651647538',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/rishabh-maurya/order-status-management',
      projectLink: 'https://rishabh-maurya.github.io/order-status-management/'
    },
  ]);

  return (
    <section id="projects" className='min-h-screen'>
      <div className='px-[10px] md:px-[150px] py-10 flex flex-col items-center justify-center gap-10'>
        <div>
          <h5 className='text-center'>My Recent works</h5>
          <h1 className='text-center text-4xl py-2 text-primary'>Projects</h1>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-5'>
          {
            projectsInfo.map((projectInfo, index) => <ProjectCard projectInfo={projectInfo} key={index} />)
          }
        </div>

      </div>
    </section>
  )
}

export default Projects