import React from 'react'
import ContactOption from './contactOption/ContactOption'
import ContactForm from './contactForm/ContactForm'
import { FiMail } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact" className='min-h-screen'>
      <div className='px-[10px] md:px-[150px] py-10 flex flex-col items-center justify-center gap-10'>
        <div className='text-center'>
          <h5 className=''>Get in touch</h5>
          <h1 className='text-4xl text-primary py-2'>Contact Me</h1>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-10'>
          <div className=''>
            <ContactOption Icon={FiMail} title='Email' source='mauryarishabh559@gmail.com' link="mailto:mauryarishabh559@gmail.com" />
            <ContactOption Icon={BsWhatsapp} title='Whatsapp' source='9670872912' link='https://wa.me/9670872912?text=Hello, Rishabh 👋' />
          </div>

          <div className='mx-auto'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact