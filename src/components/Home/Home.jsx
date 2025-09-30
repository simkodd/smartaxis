import React from 'react'
import Why from "../Home/Why";
import Numbers from "../Home/Numbers";
import { useInView } from 'react-intersection-observer';
import Vision from '../Home/Vision';
import Happy from '../Home/Happy';
import Map from '../Home/Map';
import { Link } from 'react-router-dom';

function Home() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-2000";
    const motionClassL = "motion-preset-slide-left motion-duration-2000";


    return (
        <>
            <div id='home' className='md:flex  my-3 ml-10 '>

                <div ref={ref} className={`mt-10 pt-10 md:p-0 ${inView ? motionClassR : 'opacity-0'}`}>
                    <p className='text-blue md:text-2xl text-3xl font-regular text-shadow-2xs/9 md:mt-25 w-85 md:ml-6'>
                        <span className=' uppercase text-green text-xs motion-preset-typewriter motion-duration-3000'>#1 on the market</span>
                        Your trusted source for <span className='font-semibold'>Premium Laptops</span>, ensuring you have the right tools to build your <span className='font-semibold'>Future</span>
                    </p>
                    <Link to={"/Contact"}>
                        <span>
                            <button className='md:mt-8 mt-6 md:ml-6 block md:w-35 w-25 md:h-10 h-7 font-light uppercase md:text-sm text-xs bg-blue text-white rounded-xl tracking-wider shadow-[0_0_10px_2px_rgba(144,199,64,0.8)]
                    active:text-blue active:bg-green active:shadow-[0_0_10px_2px_rgba(2,57,122,0.8)] active:scale-99  hover:scale-101 hover:shadow-[0_0_15px_4px_rgba(144,199,64,0.8)] motion-preset-bounce motion-duration-1000 '>contact us</button>
                        </span>
                    </Link>

                </div>
                <img src="./src/assets/photos/first.svg" alt="Laptops" className='md:w-1/2 my-10
            motion-scale-in-[0.1] motion-translate-x-in-[40%] motion-translate-y-in-[0%] motion-rotate-in-[-30deg] motion-duration-[4s] motion-duration-[2.34s]/rotate' />

            </div>
            <Why />
            <Numbers />
            <Vision />
            <Happy />
            <Map />
        </>
    )
}
export default Home