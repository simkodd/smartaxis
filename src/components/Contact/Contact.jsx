import React from 'react'
import { useInView } from 'react-intersection-observer';



function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  const motionClassR = "motion-preset-slide-right motion-duration-3000";
  const motionClassL = "motion-preset-slide-left motion-duration-3000";
  const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-3000";



  return (
    <div className='h-screen'>
      <div className='md:flex w-full'>
        <div ref={ref} className={`md:w-1/3 m-10 mt-20 ${inView ? motionClassR : 'opacity-0'}`}>
          <p className='text-green'>Have A Question?</p>
          <p className='font-semibold md:text-2xl text-xl   text-green'><span className='border-blue border-b-1 pb-2'>We'</span>re Here To Help</p>
          <p className='text-grey text-[10px] mt-5'>You can contact or visit us in our office from Monday to Friday from 12:00 - 22:00</p>
          <div className='flex flex-col gap-y-10 mt-10 text-blue font-medium'>
            <div className='flex'>
              <img src="./src/assets/photos/call.svg" alt="call" className='size-5'/>
              <p className='pl-2'>+971 58 502 6002</p>
            </div>
            <div className='flex'>
              <img src="./src/assets/photos/mail.svg" alt="call" className='size-5' />
              <p className='pl-2'>ContactUs@SmartAxis.net</p>
            </div>
            <div className='flex'>
              <img src="./src/assets/photos/loc.svg" alt="call" className='size-5' />
              <p className='pl-2'>N 4 ,Industrial Area 2 ,Sharjah ,UAE</p>
            </div>
          </div>
        </div>

        <div ref={ref}  className={`md:w-2/3 m-8 mt-20 h-110 md:h-auto ${inView ? motionClassL : 'opacity-0'}`}>
          <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.6637198250623!2d55.40595307538567!3d25.315499977635078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE4JzU1LjgiTiA1NcKwMjQnMzAuNyJF!5e0!3m2!1sen!2sqa!4v1759074057852!5m2!1sen!2sqa"
                    width="100%"
                    height="100%"
                    className='border-white border-2 rounded-xl mt-4 shadow-[0_0_15px_2px_rgba(2,57,122,0.8)]'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default Contact