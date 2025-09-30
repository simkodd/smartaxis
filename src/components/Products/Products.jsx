import React from 'react'
import Category from './Category'
import Latest from './Latest'



function Products() {

  return (
    <div>
      <div className='md:h-screen h-90 bg-[url(./src/assets/photos/bgP.svg)] bg-cover bg-center font-bold text-center mt-10 motion-preset-bounce  motion-duration-1500'>
        <p className='text-green text-shadow-lg md:text-3xl text-2xl tracking-wider pt-10 motion-preset-pop motion-duration-3500 '>Engineered For Excellence</p>
        <p className='text-grey text-[10px]/3 motion-preset-pop motion-duration-3500'>Browse our selection of premium electronics, meticulously crafted to meet the highest standards of quality and innovation.</p>
      </div>
      <Category />
      <Latest />
    </div>
  )
}

export default Products