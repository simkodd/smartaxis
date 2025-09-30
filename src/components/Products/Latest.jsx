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
        // 10. öğe hariç hepsi 'image'
        { id: 1, src: "./src/assets/photos/1.jpg", span: "1x1", type: 'image' }, 
        { id: 2, src: "./src/assets/photos/2.jpg", span: "1x1", type: 'image' }, 
        { id: 3, src: "./src/assets/photos/3.jpg", span: "1x1", type: 'image' }, 
        
        { id: 4, src: "./src/assets/photos/4.jpg", span: "1x2", type: 'image' }, 
        { id: 5, src: "./src/assets/photos/5.jpg", span: "2x1", type: 'image' }, 
        
        { id: 6, src: "./src/assets/photos/6.jpg", span: "1x1", type: 'image' }, 
        { id: 7, src: "./src/assets/photos/7.jpg", span: "1x1", type: 'image' }, 
        
        { id: 8, src: "./src/assets/photos/8.jpg", span: "1x1", type: 'image' }, 
        { id: 9, src: "./src/assets/photos/9.jpg", span: "1x1", type: 'image' }, 
        // KRİTİK DEĞİŞİKLİK: 10. Öğe video oldu
        { id: 10, src: "./src/assets/photos/10.mp4", span: "1x2", type: 'video' }, 
        
        { id: 11, src: "./src/assets/photos/11.jpg", span: "2x1", type: 'image' }, 
    ];
// <img src="./src/assets/photos/logo.svg" alt="" />
  // Helper fonksiyonu ile orantıyı belirleyen sınıfı döndür (Önceki çözümdeki gibi)
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
                        
                        {/* ORAN HİLESİ İÇİN BOŞ DIV */}
                        <div className="w-full h-0"></div> 

                        {/* İÇERİK KAPSAYICISI: Tamamen orantılı alana yayılır. */}
                        <div className="absolute inset-0">
                            
                            {/* KOŞULLU RENDERLAMA: Video mu, Görsel mi? */}
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
                            
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-white opacity-60 flex items-center justify-center p-4 
                                            text-blue transform translate-y-full group-hover:translate-y-0 
                                            transition-transform duration-500 ">
                                <div className="text-center flex flex-col items-center justify-center">
                                    <h3 className="text-xl font-bold mb-2 "><img src="./src/assets/photos/logo.svg" className='size-15' alt="" /></h3>
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