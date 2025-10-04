import React from 'react'
import { useInView } from 'react-intersection-observer';


function Map() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-2000";
    const motionClassL = "motion-preset-slide-left motion-duration-2000";
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-1000";




    return (
        <div className='h-fit text-center'>
            <div>
                <h1 ref={ref} className={`text-green text-3xl lg:text-4xl tracking-wider text-shadow-lg mt-20 lg:mb-10 ${inView ? motionClassT : 'opacity-0'}`}>Let’s Work Together! </h1>
                <div className='sm:flex space-y-4 items-start justify-center gap-x-4 md:gap-x-20 mt-6 md:mt-2 px-2'>
                    <div ref={ref} className={`flex flex-col items-center gap-y-2 ${inView ? motionClassR : 'opacity-0'}`}>
                        <img
                            src="/photos/call.svg"
                            alt=""
                            className=' size-9 lg:size-11 border-b-1 border-blue p-1' />
                        <a href="tel:+971585026002" className='text-blue font-semibold text-[10px] md:text-sm lg:text-base'>+971 58 502 6002</a>
                    </div>

                    <div ref={ref} className={`flex flex-col items-center gap-y-2 ${inView ? motionClassR : 'opacity-0'}`}>
                        <img
                            src="/photos/mail.svg"
                            alt=""
                            className=' size-9 lg:size-11 border-b-1 border-blue p-1' />
                        <a href="mailto:info@seninsite.com?subject=İletişim&body=Hello," className='text-blue font-semibold text-[10px] md:text-sm lg:text-base'>ContactUs@SmartAxis.net</a>
                    </div>

                    <div ref={ref} className={`flex flex-col items-center gap-y-2 ${inView ? motionClassL : 'opacity-0'}`}>
                        <img
                            src="/photos/loc.svg"
                            alt=""
                            className=' size-9 lg:size-11 border-b-1 border-blue p-1' />
                        <h1 className='text-blue font-semibold text-[10px] md:text-sm lg:text-base w-30 md:w-40'>N 4 ,Industrial Area 2 ,Sharjah ,UAE</h1>
                    </div>

                    <div ref={ref} className={`flex flex-col items-center gap-y-2 ${inView ? motionClassL : 'opacity-0'}`}>
                        <img
                            src="/photos/time.svg"
                            alt=""
                            className=' size-9 lg:size-11 border-b-1 border-blue p-1' />
                        <h1 className='text-blue font-semibold text-[10px] md:text-sm lg:text-base w-20 md:w-25 lg:w-27'>Opening Time 12:00 - 22:00</h1>
                    </div>
                </div>
            </div>

            <div className="w-full md:h-70 lg:h-100 h-100">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14426.653512731556!2d55.390083608251274!3d25.315511451262324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59535603d465%3A0xb19556534ba2680!2sSmart%20Axis%20Computer!5e0!3m2!1sen!2sqa!4v1759598533902!5m2!1sen!2sqa" 
                width="100%" 
                height="100%" 
                className='border-white border-2 rounded-xl mt-4 shadow-[0_0_15px_2px_rgba(2,57,122,0.8)]' 
                allowFullScreen
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Map