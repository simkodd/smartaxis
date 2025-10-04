import React from 'react'
import { useInView } from 'react-intersection-observer';


function Expertise() {
const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-3000";
    const motionClassL = "motion-preset-slide-left motion-duration-3000";


    return (
        <div className='h-fit flex w-full'>
            <div ref={ref} className={`w-1/2 ${inView ? motionClassR : 'opacity-0'}`}>
                <img src="/photos/plan.jpg" alt="" className='size-104 lg:size-auto'/>
            </div>

            <div ref={ref} className={`w-1/2 bg-[#72A93E] size-104 lg:h-auto ${inView ? motionClassL :'opacity-0'}`}>
                <div className='text-white md:p-10 p-7'>
                    <p className='font-extrabold md:text-2xl text-xl/10 lg:text-3xl md:tracking-wider'><span className='border-blue border-b-1 pb-2'>Ou</span>r Expertise</p>
                    <p className='opacity-50 font-semibold text-[10px]/3 lg:text-sm mt-5'>We redefine excellence in refurbished technology. By meticulously controlling every step, from sourcing to support, we deliver trusted value to all clients. Our expertise is built on four core pillars:</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 md:pl-10 gap-3 md:pr-5 px-7 '> 
                    <div className='bg-blue md:p-5 lg:p-10 p-2 text-center flex flex-col items-center hover:scale-110 duration-500 hover:shadow-[0_0_27px_2px_rgba(238,239,239,0.9)]'>
                        <img src="/photos/puzzle.svg" alt="Customizing" className='md:size-7 lg:size-10 size-5'/>
                        <p className='text-white font-semibold text-[11px] md:text-sm lg:text-base py-2'>Custom Solutions</p>
                    </div>
                    <div className='bg-blue md:p-5 lg:p-10 p-2 text-center flex flex-col items-center hover:scale-110 duration-500 hover:shadow-[0_0_27px_2px_rgba(238,239,239,0.9)]'>
                        <img src="/photos/accur.svg" alt="Customizing" className='md:size-7 lg:size-10 size-5'/>
                        <p className='text-white font-semibold text-[11px] md:text-sm lg:text-base py-2'>Quality Assurance</p>
                    </div>
                    <div className='bg-blue md:p-5 lg:p-10 p-2 text-center flex flex-col items-center hover:scale-110 duration-500 hover:shadow-[0_0_27px_2px_rgba(238,239,239,0.9)]'>
                        <img src="/photos/sparkle.svg" alt="Customizing" className='md:size-7 lg:size-10 size-5'/>
                        <p className='text-white font-semibold text-[11px] md:text-sm lg:text-base py-2'>Diverse Portfolio</p>
                    </div>
                    <div className='bg-blue md:p-5 lg:p-10 p-2 text-center flex flex-col items-center hover:scale-110 duration-500 hover:shadow-[0_0_27px_2px_rgba(238,239,239,0.9)]'>
                        <img src="/photos/headset.svg" alt="Customizing" className='md:size-7 lg:size-10 size-5'/>
                        <p className='text-white font-semibold  text-[11px] md:text-sm lg:text-base py-2'>Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise