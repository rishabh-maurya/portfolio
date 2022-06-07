import React from 'react'
import { ImRocket } from 'react-icons/im'

const ProjectCard = ({ projectInfo }) => {
    return (
        <div className='min-w-[350px] max-w-[400px] border-2 border-bgColorVariant bg-bgColorVariant hover:bg-transparent rounded-[30px] p-3'>
            <div className=''>
                <img className='rounded-[30px] object-cover w-full h-[200px]' src={projectInfo.img} alt="" />
            </div>

            <div className='py-5'>
                <h3 className='text-[1.2rem]'>{projectInfo.name}</h3>
                <div className='py-3 flex justify-start items-center'>
                    <ImRocket className='w-5 h-5 text-primary mr-1' />
                    {projectInfo.tech.map((tech, index) => 
                    <p key={index} className='text-[0.7rem] bg-bgColor py-1 px-3 rounded-full shadow-inner shadow-bgColorVariant ml-1'>
                        {tech}
                    </p>)}
                </div>
                <div className='mt-3'>
                    <a href={projectInfo.githubLink} className='btn py-1 bg-transparent text-primary' target='_blank'>Github</a>
                    <a href={projectInfo.projectLink} className='btn py-1 ml-5' target='_blank'>Live</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard