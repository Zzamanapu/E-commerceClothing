import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi aut asperiores repudiandae expedita quae, recusandae veritatis porro iste vel ipsam reiciendis quia facilis ullam quo ea obcaecati tempore odit nam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni corporis explicabo sed? Nostrum ratione commodi cum maiores aperiam laborum.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, est.</p>
        </div>
      </div>


      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Quality Assurence:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringnet quality standards.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satidfaction is out top priority.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About