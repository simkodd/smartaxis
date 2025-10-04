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
          <p className='text-green lg:text-lg'>Have A Question?</p>
          <p className='font-semibold md:text-2xl text-xl lg:text-3xl  text-green'><span className='border-blue border-b-1 pb-2'>We'</span>re Here To Help</p>
          <p className='text-grey text-[10px] lg:text-xs mt-5'>You can contact or visit us in our office from Monday to Friday from 12:00 - 22:00</p>
          <div className='flex flex-col gap-y-10 mt-10 text-blue font-medium'>
            <div className='flex'>
              <img src="/photos/call.svg" alt="call" className='size-5 lg:size-8'/>
              <a href="tel:+971585026002" className='pl-2 lg:text-lg'>+971 58 502 6002</a>
            </div>
            <div className='flex'>
              <img src="/photos/mail.svg" alt="call" className='size-5 lg:size-8' />
              <a href="mailto:ContactUs@SmartAxis.net?subject=İletişim&body=Hello," className=' pl-2 lg:text-lg'>ContactUs@SmartAxis.net</a>
            </div>
            <div className='flex'>
              <img src="/photos/loc.svg" alt="call" className='size-5 lg:size-8' />
              <p className='pl-2 lg:text-lg'>N 4 ,Industrial Area 2 ,Sharjah ,UAE</p>
            </div>
          </div>
        </div>

        <div ref={ref}  className={`md:w-2/3 m-8 mt-20 h-110 lg:h-140 md:h-auto ${inView ? motionClassL : 'opacity-0'}`}>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14426.653512731556!2d55.390083608251274!3d25.315511451262324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59535603d465%3A0xb19556534ba2680!2sSmart%20Axis%20Computer!5e0!3m2!1sen!2sqa!4v1759598533902!5m2!1sen!2sqa" 
          width="600" 
          height="450" 
          className='border-white border-2 rounded-xl mt-4 shadow-[0_0_15px_2px_rgba(2,57,122,0.8)]' 
          allowFullScreen
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default Contact