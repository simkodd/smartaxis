import React from 'react'
import { useInView } from 'react-intersection-observer';



function Latest() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const motionClassR = "motion-preset-slide-right motion-duration-3000";
    const motionClassL = "motion-preset-slide-left motion-duration-3000";
    const motionClassT = "motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-duration-3000";

    const gridItems = [
        { id: 1, src: "/photos/1.jpg", span: "1x1", type: 'image' }, 
        { id: 2, src: "/photos/2.jpg", span: "1x1", type: 'image' }, 
        { id: 3, src: "/photos/3.jpg", span: "1x1", type: 'image' }, 
        
        { id: 4, src: "/photos/4.jpg", span: "1x2", type: 'image' }, 
        { id: 5, src: "/photos/5.jpg", span: "2x1", type: 'image' }, 
        
        { id: 6, src: "/photos/6.jpg", span: "1x1", type: 'image' }, 
        { id: 7, src: "/photos/7.jpg", span: "1x1", type: 'image' }, 
        
        { id: 8, src: "/photos/8.jpg", span: "1x1", type: 'image' }, 
        { id: 9, src: "/photos/9.jpg", span: "1x1", type: 'image' }, 
        { id: 10, src: "/photos/10.mp4", span: "1x2", type: 'video' }, 
        
        { id: 11, src: "/photos/11.jpg", span: "2x1", type: 'image' }, 
    ];
  const getAspectRatioClasses = (span) => {
    switch (span) {
      case "1x2":
        return "row-span-2 pb-[200%]"; 
      case "2x1":
        return "col-span-2 pb-[50%]"; 
      case "1x1":
      default:
        return "pb-[100%]"; 
    }
  };


    return (
        <div className='h-full'>
            <div>
                <p ref={ref} className={`font-semibold md:text-2xl text-xl md:tracking-wider text-green m-10 mt-20 ${inView ? motionClassT : 'opacity-0'}`}><span className='border-blue border-b-1 pb-2'>Lat</span>est Work</p>
            </div>
           <div className='grid grid-cols-3 md:m-10 m-2 md:gap-4 gap-2'>
                {gridItems.map((item) => (
                    <div 
                        key={item.id} 
                        className={`relative group overflow-hidden shadow-[0_0_20px_1px_rgba(0,0,0,0.6)] hover:scale-108 duration-900 hover:shadow-[0_0_27px_2px_rgba(2,57,122,0.9)] ${getAspectRatioClasses(item.span)}`}
                    >
                        
                        <div className="w-full h-0"></div> 

                        <div className="absolute inset-0">
                            
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    alt={`Video ${item.id}`} 
                                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' 
                                />
                            ) : (
                                <img 
                                    src={item.src} 
                                    alt={`Ürün ${item.id}`} 
                                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' 
                                />
                            )}
                            
                            <div
                                className="absolute inset-0 bg-white opacity-60 flex items-center justify-center p-4 
                                            text-blue transform translate-y-full group-hover:translate-y-0 
                                            transition-transform duration-500 ">
                                <div className="text-center flex flex-col items-center justify-center">
                                    <h3 className="text-xl font-bold mb-2 "><img src="/photos/logo.svg" className='size-15' alt="" /></h3>
                                    <p className="text-sm font-extrabold text-green ">Smart <span className='text-blue'>Axis</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latest