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
                        <h1 className='text-blue font-semibold text-[10px] md:text-sm lg:text-base'>+971 58 502 6002</h1>
                    </div>

                    <div ref={ref} className={`flex flex-col items-center gap-y-2 ${inView ? motionClassR : 'opacity-0'}`}>
                        <img
                            src="/photos/mail.svg"
                            alt=""
                            className=' size-9 lg:size-11 border-b-1 border-blue p-1' />
                        <h1 className='text-blue font-semibold text-[10px] md:text-sm lg:text-base'>ContactUs@SmartAxis.net</h1>
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
    )
}

export default Map