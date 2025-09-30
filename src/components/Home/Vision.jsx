import React from 'react'
import { useInView } from 'react-intersection-observer';


function Vision() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-2000";
    const motionClassL = "motion-preset-slide-left motion-duration-2000";
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-1000";


    return (
        <div className='h-fit '>
            <div ref={ref} className={`text-center mt-10 ${inView ? motionClassT : 'opacity-0'}`}>
                <h1 className='text-green tracking-wider font-black text-2xl'>Your Vision, Our Technology</h1>
                <p className='text-grey md:text-xs text-[10px] font-semibold'>Each device in our collection is meticulously selected for performance and durability</p>
            </div>

            <div ref={ref} className='flex flex-wrap gap-y-2 gap-x-2 items-center justify-center pt-10'>
                <div ref={ref} className={`flex flex-col w-38 ${inView ? motionClassR : 'opacity-0'}`}>
                    <img
                        src="/photos/lap2.jpg"
                        alt="photo1"
                        className=' w-full border-2 border-white rounded-xl shadow-2xl shadow-blue ' />
                </div>
                <div ref={ref} className={`flex flex-col w-38 md:h-40 sm:justify-start ${inView ? motionClassR : 'opacity-0'}`}>
                    <img
                        src="/photos/lap.jpg"
                        alt="photo1"
                        className=' w-full border-2 border-white rounded-xl shadow-2xl shadow-blue  ' />
                </div>
                <div ref={ref} className={`flex flex-col w-38 ${inView ? 'motion-preset-fade motion-duration-2000' : 'opacity-0'}`}>
                    <video
                        src="/photos/10.mp4"
                        alt="laptop video"

                        autoPlay
                        loop
                        muted
                        playsInline

                        className='w-full border-2 border-white rounded-xl shadow-2xl shadow-blue object-cover'
                    />
                </div>
                <div ref={ref} className={`flex flex-col w-38 md:h-40 sm:justify-start ${inView ? motionClassL : 'opacity-0'}`}>
                    <img
                        src="/photos/lap3.jpg"
                        alt="photo1"
                        className=' w-full border-2 border-white rounded-xl shadow-2xl shadow-blue  ' />
                </div>
                <div ref={ref} className={`flex flex-col w-38 ${inView ? motionClassL : 'opacity-0'}`}>
                    <img
                        src="/photos/lap4.jpg"
                        alt="photo1"
                        className=' w-full border-2 border-white rounded-xl shadow-2xl shadow-blue  ' />
                </div>

            </div>

        </div>
    )
}

export default Vision