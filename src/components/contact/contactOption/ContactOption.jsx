import React from 'react'
import { FiMail } from 'react-icons/fi'

const ContactOption = ({ Icon, title, source, link }) => {
  return (
    <div className='mb-5 py-5 px-10 text-center border-2 border-bgColorVariant bg-bgColorVariant hover:bg-transparent rounded-[20px]'>
        <Icon className='h-7 w-7 mx-auto' />
        <h3 className='pt-5 text-2xl'>{title}</h3>
        <p className='text-[0.9rem] pb-5'>{source}</p>
        <a href={link} className='text-[0.9rem] text-primary'>Send a message</a>
    </div>
  )
}

export default ContactOption