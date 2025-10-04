import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function Happy() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-2000";

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    useEffect(() => {
        if (scrollRef.current) {

            setItemWidth(scrollRef.current.offsetWidth);
        }


        const handleResize = () => {
            if (scrollRef.current) {
                setItemWidth(scrollRef.current.offsetWidth);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const handleScroll = () => {
        if (scrollRef.current && itemWidth > 0) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setActiveIndex(newIndex);
        }
    };

    const handleDotClick = (index) => {
        if (scrollRef.current && itemWidth > 0) {
            scrollRef.current.scrollTo({
                left: index * itemWidth,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    const dots = [0, 1, 2];

    return (
        <div className='bg-[#72A93E] h-fit mt-30'>

            <div className='relative w-full'>
                <img
                    src="./src/assets/photos/quo.svg "
                    alt=""
                    className='absolute top-35 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>

            <div className='text-white text-center'>
                <h1 ref={ref} className={`font-bold text-3xl lg:text-4xl tracking-wider text-shadow-lg pt-28 ${inView ? motionClassT : 'opacity-0'}`}>Happy Customers</h1>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    
                    className='flex overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory'
                >
                    <div className='w-full flex-shrink-0 snap-center'>
                        <h1 className='px-19 md:text-sm text-xl/9 lg:text-lg pt-25 pb-12'>The refurbished laptop is fantastic—it performs like new! Their After-Sales Support was quick and professional. I'll definitely be a return customer.</h1>
                        <p className='font-semibold md:text-sm text-lg lg:text-base tracking-wide'>Yousef M.,<span className='text-blue md:text-[10px] text-sm'> Verified Buyer</span></p>
                    </div>

                    <div className='w-full flex-shrink-0 snap-center'>
                        <h1 className='px-19 md:text-sm text-xl/9 lg:text-lg pt-25 pb-12'>SmartAxis is a reliable partner. Their Order & Logistics are incredibly fast, and every bulk shipment meets our high quality standards. Essential for our business.</h1>
                        <p className='font-semibold md:text-sm text-lg lg:text-base tracking-wide'>Omar F.,<span className='text-blue md:text-[10px] text-sm'> Procurement Manager</span></p>
                    </div>

                    <div className='w-full flex-shrink-0 snap-center' >
                        <h1 className='px-19 md:text-sm text-xl/9 lg:text-lg pt-25 pb-12'>Found the perfect high-performance PC thanks to their amazing variety of models. The device's Quality Assurance is top-notch. Great value for the price!</h1>
                        <p className='font-semibold md:text-sm text-lg lg:text-base tracking-wide'>Fahd A.,<span className='text-blue md:text-[10px] text-sm'> Freelance Designer</span></p>
                    </div>
                </div>

                <div className='flex justify-center mt-4 '>
                    {dots.map((_, index) => (
                        <svg
                            key={index}
                            className={`w-4 h-4 cursor-pointer transition-colors duration-200 
                            ${index === activeIndex ? 'text-blue' : 'text-white opacity-20 scale-110 mb-25'}
                        `}
                            onClick={() => handleDotClick(index)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 10" // Standart boyut
                        >
                            <circle cx="5" cy="5" r="3" fill="currentColor" />
                        </svg>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Happy