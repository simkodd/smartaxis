import React  from 'react';
import { useInView } from 'react-intersection-observer';
import NavBar from "../NavBar";
import Expertise from './Expertise';
import How from './How';

function AboutUs() {
 const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-3000";
    const motionClassL = "motion-preset-slide-left motion-duration-3000";
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-1000";



  return (
    <div className='h-fit'>
      <div className='relative'>
        <img
          src="/photos/bgA.svg"
          alt="background"
          className='w-full scale-350 md:scale-100' />
      </div>
      <div className='absolute inset-0 md:mt-20 mt-25 lg:mt-30 text-center text-white motion-translate-x-in-[0%] motion-translate-y-in-[-100%] motion-duration-1000 motion-ease-spring-bouncier'>
        <h1 className='font-extrabold md:text-4xl lg:text-5xl text-3xl tracking-wider '>Welcome To <span className='text-green'>Smart Axis</span></h1>
        <p className='font-regular opacity-50 mt-2'>What you should know about us</p>
      </div>

      <div className='flex w-full items-start mt-40 md:mt-0'>
        <div ref={ref} className ={`w-1/2 md:p-12 p-4 ${inView ? motionClassR : 'opacity-0'}`}>
          <img src="/photos/shake.jpg" alt="" className='' />
          <div className='font-semibold mt-4'>
            <p className='text-green md:text-xl lg:text-2xl md:tracking-wider'><span className='border-blue border-b-1 pb-2'>Vis</span>ion, Mission & Values</p>
            <p className='text-grey text-[12px] lg:text-sm/6 pt-5'>Our vision is to redefine the global market for refurbished technology, making high-performance electronics accessible without compromise on quality. <br /> Our mission is to provide meticulously inspected, top-tier devices and build lasting trust with every customer, from individual buyers to wholesale partners. <br /> We operate with a strong commitment to core values like integrity and quality, ensuring every product and service reflects our dedication to excellence and client satisfaction.</p>
          </div>
        </div>

        <div ref={ref} className={`w-1/2 md:p-12 p-4 ${inView ? motionClassL : 'opacity-0'}`}>
          <img src="/photos/office.jpg" alt="" />
          <div className='font-semibold mt-4'>
            <p className='text-green md:text-xl lg:text-2xl md:tracking-wider'><span className='border-blue border-b-1 pb-2'>His</span>tory</p>
            <p className='text-grey text-[12px] lg:text-sm/6 pt-5'>Founded in 2017, SmartAxis began as a small venture in Egypt, built from the ground up with passion and an unwavering commitment to quality. Through years of dedication and hard work, we grew our operations and quickly established a strong local presence. <br /> Recognizing an opportunity for broader growth, we made a strategic move to the UAE, where our journey continued with renewed energy. This expansion marked a significant milestone, allowing us to build on our foundation and serve a wider market.</p>
          </div>
        </div>
      </div>
      <Expertise />
      <How />
    </div>
  )
}

export default AboutUs