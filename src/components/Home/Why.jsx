import React from 'react'
import { useInView } from 'react-intersection-observer';

function Why() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-2000";
    const motionClassL = "motion-preset-slide-left motion-duration-2000";

    return (
        <div className='h-fit md:flex w-full px-5'>
            <div ref={ref} className={`w-1/2 ${inView ? motionClassR : 'opacity-0'}`}>
                <p className='text-green font-semibold lg:text-3xl text-2xl'> <span className='border-b border-blue pb-1'> Abo</span>ut Us</p>
                <div className='flex gap-x-1 mt-14'>
                    <img
                        ref={ref}
                        src="/photos/sag.jpg"
                        alt="SmartAxis"
                        className={`lg:size-38 size-28 ${inView ? motionClassR : 'opacity-0'}`} />
                    <img
                        ref={ref}
                        src="/photos/orta.jpg"
                        alt="SmartAxis"
                        className={`lg:size-38 size-28 ${inView ? motionClassR : 'opacity-0'}`} />
                    <img
                        ref={ref}
                        src="/photos/sol.jpg"
                        alt="SmartAxis"
                        className={`lg:size-38 size-28 ${inView ? motionClassR : 'opacity-0'}`} />                </div>
                <p className='text-grey font-semibold lg:text-xs text-[9px] pt-10 w-86'>At Smart Axis, we redefine the used electronics market. We provide high-quality, high-performance laptops and PCs, with a strong commitment to professionalism and trust in every product and service. Your satisfaction is our guarantee.</p>
                <p className='text-blue lg:text-lg text-sm font-black mt-5 w-86 lg:w-100'>Save Time, Save Money, With Superior Quality Get premium tech exclusively from <span className='text-green'>Smart</span>  Axis</p>
            </div>
            <div ref={ref} className={`w-1/2 ${inView ? motionClassL : 'opacity-0'}`}>
                <p className='text-green font-semibold lg:text-3xl text-2xl md:mt-0 mt-12 w-full'> <span className='border-b border-blue pb-1 '> Wh</span>y Choose Us</p>
                <div className='flex-col mt-10 space-y-10 lg:space-y-15'>
                    <div className='w-80 lg:w-full'>
                        <img 
                        src="/photos/quality.svg" 
                        alt="" 
                        className='m-1 mt-0 lg:size-7 size-5 inline-block ' />
                        <span className='text-blue font-semibold lg:text-xl'> Premium Quality</span>
                        <p className='text-grey lg:text-xs text-[9px] md:w-86 w-80 pl-9 font-semibold'>We use only A-grade components and rigorous testing to ensure unmatched reliability and top performance in every product we make.</p>
                    </div>
                    <div className='w-80 lg:w-full'>
                        <img 
                        src="/photos/support.svg" 
                        alt="SmartAxis" 
                        className='m-1 mt-0 lg:size-7 size-6 inline-block' />
                        <span className='text-blue font-semibold lg:text-xl'> Dedicated After-Sales Support</span>
                        <p className='text-grey lg:text-xs text-[9px] md:w-86 w-80 pl-9 font-semibold'>Our commitment continues after your purchase. Our expert team is always here to provide fast support and ensure your full satisfaction.</p>
                    </div>
                    <div className='w-80 lg:w-full'>
                        <img 
                        src="/photos/options.svg" 
                        alt="SmartAxis" className='m-1 mt-0 lg:size-7 size-6 inline-block' />
                        <span 
                        className='text-blue font-semibold lg:text-xl'> A Wide Range of Options</span>
                        <p className='text-grey lg:text-xs text-[9px] md:w-86 w-80 pl-9 font-semibold'>We offer a wide range of solutions for every need, including laptops, PCs, AIO, monitors, POS machines, and printers.</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Why