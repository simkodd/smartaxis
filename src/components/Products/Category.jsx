import React from 'react'
import { useInView } from 'react-intersection-observer';



function Category() {
const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-3000";
    const motionClassL = "motion-preset-slide-left motion-duration-3000";
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-1000";



  return (
    <div className='h-fit'>
        <div>
            <p ref={ref} className={`font-semibold md:text-2xl text-xl md:tracking-wider text-green m-10 ${inView ? motionClassT : 'opacity-0'}`}><span className='border-blue border-b-1 pb-2'>Our</span> Product Categories</p>
        </div>
        <div className='flex flex-wrap gap-3 items-senter justify-center'>
            <div className={`hover:scale-105 duration-500 flex flex-col items-center p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl w-40 h-35 ${inView ? motionClassR : 'opacity-0'}`}>
                <img src="./src/assets/photos/lap.svg" 
                alt="Laptop" 
                className='size-17' />
                <p className='font-semibold text-blue '>Laptop</p>
            </div>
            <div ref={ref} className={`hover:scale-105 duration-500 flex flex-col items-center p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl  w-40 h-35 ${inView ? motionClassL : 'opacity-0'}`}>
                <img src="./src/assets/photos/aio.svg" 
                alt="Laptop" 
                className='size-17' />
                <p className='font-semibold text-blue '>AIO</p>
            </div>
            <div className={`hover:scale-105 duration-500 flex flex-col items-center p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl  w-40 h-35 ${inView ? motionClassR : 'opacity-0'}`}>
                <img src="./src/assets/photos/pc.svg" 
                alt="Laptop" 
                className='size-17 ' />
                <p className='font-semibold text-blue '>PC</p>
            </div>
            <div className={`hover:scale-105 duration-500 flex flex-col items-center gap-y-6 p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl  w-40 h-35 ${inView ? motionClassL : 'opacity-0'}`}>
                <img src="./src/assets/photos/pos.svg" 
                alt="Laptop" 
                className='w-7 ' />
                <p className='font-semibold text-blue '>POS Machine</p>
            </div>
            <div className={`hover:scale-105 duration-500 flex flex-col items-center p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl  w-40 h-35 ${inView ? motionClassR : 'opacity-0'}`}>
                <img src="./src/assets/photos/mon.svg" 
                alt="Laptop" 
                className='size-17' />
                <p className='font-semibold text-blue '>Monitor</p>
            </div>
            <div className={`hover:scale-105 duration-500 flex flex-col items-center p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl  w-40 h-35 ${inView ? motionClassL : 'opacity-0'}`}>
                <img src="./src/assets/photos/poj.svg" 
                alt="Laptop" 
                className='size-17' />
                <p className='font-semibold text-blue '>Projector</p>
            </div>
            <div className={`hover:scale-105 duration-500 flex flex-col items-center p-7 text-center shadow-[0_0_15px_2px_rgba(2,57,122,0.6)] rounded-2xl w-40 h-35 ${inView ? motionClassR : 'opacity-0'}`}>
                <img src="./src/assets/photos/mod.svg" 
                alt="Laptop" 
                className='size-17' />
                <p className='font-semibold text-blue '>Modem</p>
            </div>

        </div>
    </div>
  )
}

export default Category