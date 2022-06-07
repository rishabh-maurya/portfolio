import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef();
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputValue((prevInputValue) => {
            return { ...prevInputValue, [name]: value }
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hvm1u7x', 'template_lr11p88', form.current, 'lryE-ZTX-Y3epZNYD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setInputValue({
            name: '',
            email: '',
            message: ''
        })
    };

    return (
        <div className='md:w-[50%] w-screen'>
            <form ref={form} onSubmit={(e) => sendEmail(e)} >
                <div className='sm:px-[50px] px-[10px] mb-5'>
                    <input
                        className='md:w-[600px] w-full bg-transparent p-5 border-2 border-bgColorVariant rounded-lg focus:border-primary focus:outline-none'
                        type="text"
                        name='name'
                        placeholder='Your Full Name'
                        required
                        value={inputValue.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='sm:px-[50px] px-[10px] mb-5'>
                    <input
                        className='md:w-[600px] w-full bg-transparent p-5 border-2 border-bgColorVariant rounded-lg focus:border-primary focus:outline-none'
                        type="email"
                        name='email'
                        placeholder='Your Email'
                        required
                        value={inputValue.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='sm:px-[50px] px-[10px] mb-5'>
                    <textarea
                        className='md:w-[600px] w-full bg-transparent p-5 border-2 border-bgColorVariant rounded-lg resize-none focus:border-primary focus:outline-none' rows={5}
                        type="text"
                        name='message'
                        placeholder='Your Message'
                        required
                        value={inputValue.message}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='sm:px-[50px] px-[10px]'>
                    <button type='submit' className='btn'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm