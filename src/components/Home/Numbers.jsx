import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Numbers() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.01,
    })
  
        const motionClassR = "motion-preset-slide-right motion-duration-2000";
        const motionClassL = "motion-preset-slide-left motion-duration-2000";
    

    
    return (
        <div className='h-fit w-full mt-20'>
            
            <div className='relative'>
                <img

                    src="/photos/bg.svg"
                    alt=""
                    className='md:w-full sm:scale-100 scale-700 h-180 md:h-auto' />
                <div className='absolute inset-0 flex md:flex-row flex-col gap-y-20 text-2xl md:text-lg gap-x-6 lg:gap-x-15 items-center justify-center text-white font-bold tracking-wider'>

                    <div ref={ref} className='text-center md:space-y-2 space-y-3'>
                        <h1 className='lg:text-2xl'>{inView && (<CountUp key={inView} start={0} end={15} duration={3} delay={0} />)}+</h1>
                        <h1 className='lg:text-2xl'>Years O<span className='border-t border-green pt-1 '>f Exp</span>erience</h1>
                    </div>
                    <div className='text-center md:space-y-2 space-y-3'>
                        <h1 className='lg:text-2xl'>{inView && (<CountUp key={inView} start={0} end={43} duration={3} delay={0} />)}+</h1>
                        <h1 className='lg:text-2xl'>Techno<span className='border-t border-green pt-1'>logy </span>Experts</h1>
                    </div>
                
                    <div className='text-center md:space-y-2 space-y-3'>
                        <h1 className='lg:text-2xl'>{inView && (<CountUp key={inView} start={0} end={1533} duration={3} delay={0} />)}+</h1>
                        <h1 className='lg:text-2xl'>Wholes<span className='border-t border-green pt-1'>ale P</span>artners</h1>
                    </div>
                    <div className='text-center md:space-y-2 space-y-3'>
                        <h1 className='lg:text-2xl'>{inView && (<CountUp key={inView} start={0} end={3892} duration={3} delay={0} />)}+</h1>
                        <h1 className='lg:text-2xl'>Satisfi<span className='border-t border-green pt-1'>ed Cu</span>stomers</h1>
                    </div>

                </div>
            </div>

            <div ref={ref} className='md:flex w-full pt-10 md:p-5 sm:p-8 p-2'>
                <div className={`w-2/3 space-y-5  ${inView ? motionClassR : 'opacity-0'}`}>
                    <p className='text-grey font-medium text-sm lg:text-base'><span className='border-b border-green pb-1'>Our C</span>lients Know..</p>
                    <p className='text-blue font-extrabold text-2xl/9 w-90 lg:text-4xl lg:w-120'>That we are the most reliable global supplier of <span className='text-green'> high-quality</span> IT equipment.</p>
                    <p className='text-grey font-semibold text-[9px] w-86 lg:text-sm lg:w-110'>We are dedicated to sourcing and providing high-quality, high-performance devices and partner with our clients to create value by ensuring their satisfaction and long-term success.</p>
                </div>

                <div className={`md:w-1/3 md:m-auto mt-10 md:pl-0 pl-9 grid grid-cols-3 grid-rows-3 gap-6 lg:gap-12 ${inView ? motionClassL : 'opacity-0'}`}>
                    <img src="/photos/apple.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/google.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/hua.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/hp.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/dell.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/intel.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/acer.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/leno.svg" alt="" className='size-12 lg:size-16' />
                    <img src="/photos/asus.svg" alt="" className='size-12 lg:size-16' />
                </div>
            </div>
        </div>
    )
}

export default Numbers