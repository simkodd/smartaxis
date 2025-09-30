import React from 'react'
import { useInView } from 'react-intersection-observer';
import Map from '../Home/Map';

function How() {
const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-3000";
    const motionClassL = "motion-preset-slide-left motion-duration-3000";
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-1000";


    return (
        <div className='h-fit mt-6'>
            <div className=''>
                <p ref={ref} className={`text-green text-xl tracking-wider font-semibold ml-10 mt-6 md:mt-0 ${inView ? motionClassT : 'opacity-0'}`}><span className='border-blue border-b-1 pb-2'>How</span> We Work</p>
            </div>

            <div className='grid grid-cols-2 grid-rows-2 md:p-15 p-6 md:gap-x-10 gap-7 md:gap-y-15 bg-[url(/photos/how.svg)] bg-cover bg-center m-10'>
                <div ref={ref} className={`text-white ${inView ? motionClassR : 'opacity-0'}`}>
                    <img src="/photos/k.svg"
                        alt=""
                        className='size-6 inline-block' />
                    <div className= 'inline'>
                    <span className= 'font-semibold md:tracking-wider p-1'>Step 1: Consultation</span>
                    <p className='opacity-50 text-[10px]/3 font-semibold md:pl-7 '>It all starts with you. We listen to your specific needs and goals to understand exactly what you're looking for. Our experts provide personalized advice to help you find the perfect solution.</p>
                </div></div>

                <div ref={ref} className={`text-white ${inView ? motionClassL : 'opacity-0'}`}>
                    <img src="/photos/s.svg"
                        alt=""
                        className='size-6 inline-block' />
                    <span className= 'font-semibold md:tracking-wider p-1'>Step 3: Quality Assurance</span>
                    <p className='opacity-50 text-[10px]/3 font-semibold md:pl-7 '>We stand by our commitment to excellence. Every product is rigorously inspected to ensure it meets our high-quality standards before it reaches you.</p>
                </div>

                <div ref={ref} className={`text-white ${inView ? motionClassR : 'opacity-0'}`}>
                    <img src="/photos/d.svg"
                        alt=""
                        className='w-8 inline-block' />
                    <span className= 'font-semibold md:tracking-wider p-1'>Step 2: Order & Logistics</span>
                    <p className='opacity-50 text-[10px]/3 font-semibold md:pl-9 '>Once you've made your choice, we handle the rest. We manage the entire order process efficiently, guaranteeing fast and secure delivery right to your door.</p>
                </div>

                <div ref={ref} className={`text-white ${inView ? motionClassL : 'opacity-0'}`}>
                    <img src="/photos/c.svg"
                        alt=""
                        className='size-6 inline-block' />
                    <span className= 'font-semibold md:tracking-wider p-1'>Step 4: After-Sales Support</span>
                    <p className='opacity-50 text-[10px]/3 font-semibold md:pl-7 '>Our support for you continues after the sale. We are always ready to assist with any questions or issues, ensuring your long-term satisfaction and a seamless experience.</p>
                </div>

            </div>
            <Map />
        </div>
    )
}

export default How