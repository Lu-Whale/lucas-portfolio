'use client'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitFailed, setSubmitFailed] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitLoading(true)

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value || 'No Subject',
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/backend/send'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata
    }

    try {
      const response = await fetch(endpoint, options)
      const resData = await response.json()

      setEmailSubmitted(true)
      if (resData.status === 200) {
        console.log(resData.status, 'Message sent')
      } else {
        console.log('Failed to send email')
        console.log(resData)
        setSubmitFailed(true)
      }
    } catch (error) {
      setEmailSubmitted(true)
      setSubmitFailed(true)
      console.error('Failed to send message', error)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <section
      id='contact'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
    >
      <div
        className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5
          className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-500 to-pink-900 text-xl font-bold my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {' '}
          I&apos;m currently seeking entry-level job opportunities and would love to connect with potential employers.
          Whether you want to discuss a job opening, or simply want to connect, feel free to reach out.
          I prioritize responding promptly to all messages.
          Thanks and looking forward to hearing from you!
        </p>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {' '}
          Email:&nbsp;
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500'>
            lujingyu2919@gmail.com
          </span>
        </p>
        <div className='flex items-center mt-6'>
          <a href='https://github.com/Lu-Whale' className='mr-4'>
            <FaGithub size={40} className='text-white hover:text-gray-400' />
          </a>
          <a href='https://www.linkedin.com/in/lucas-jingyu-lu/' className='mr-4'>
            <FaLinkedin size={40} className='text-white hover:text-gray-400' />
          </a>
          <a href='mailto:lujingyu2919@gmail.com' className='mr-4'>
            <FaEnvelopeSquare size={40} className='text-white hover:text-gray-400' />
          </a>
        </div>
      </div>
      <div className='z-10'>
        {emailSubmitted ? (
          submitFailed ? (
            <div className='flex justify-center mt-8'>
              <p
                className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 text-sm md:text-1xl mb-4'>
                Sorry, my email service is temporarily unavailable.
                Please try again later or contact me directly at&nbsp;
                <span className='bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500'>
                  lujingyu2919@gmail.com
                </span>
                . I appreciate your patience.
              </p>
            </div>
          ) : (
            <p
              className='flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-500 text-sm md:text-2xl mt-8'>
              Email sent successfully, thank you!
            </p>
          )

        ) : (
          submitLoading ? (
            <div className='flex justify-center items-center mt-4'>
              <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500'></div>
            </div>
          ) : (
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='text-white block mb-2 text-sm font-medium'
                >
                  Your email
                </label>
                <input
                  name='email'
                  type='email'
                  id='email'
                  required
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='example@gmail.com'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='subject'
                  className='text-white block text-sm mb-2 font-medium'
                >
                  Subject
                </label>
                <input
                  name='subject'
                  type='text'
                  id='subject'
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='(Optional)'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='text-white block text-sm mb-2 font-medium'
                >
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  required
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='Drop me a message here :)'
                />
              </div>
              <button
                type='submit'
                className='bg-gradient-to-br from-blue-400 to-pink-500 hover:bg-primary-600 text-white hover:text-slate-800 font-medium py-2.5 px-5 rounded-lg w-full'
              >
                Send Message
              </button>
            </form>
          )
        )}
      </div>
    </section>
  )
}

export default EmailSection
