import React from 'react'
import image1 from '../../assets/25.jpg'
import image2 from '../../assets/26.jpg';
import image3 from '../../assets/27.jpg';
import image4 from '../../assets/28.jpg';
import image5 from '../../assets/29.jpg';
import image6 from '../../assets/30.jpg';


const GalleryCopy = () => {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
  
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Projects</h2>
  
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some graphic design works, web design  Projects.</p>
      
      
      <div className='flex justify-center mt-2'>  
      <div class="w-80 h-12 flex border rounded-lg overflow-hidden divide-x ">
        <a href="#" class="w-2/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100" >Graphic Design</a>
        <a href="#" class="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Web</a>
        <a href="#" class="w-2/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Ui/Ux</a>
      </div>
      </div>
      </div>
      
  
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        
        <a href="#" class="group h-30 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src={image1} loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
  
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">VR</span>
        </a>
        
        <a href="#" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src={image2}loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
  
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Retro</span>
        </a>
     
        <a href="#" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src={image3} loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
  
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Tech</span>
        </a>

        <a href="#" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src={image4} loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
  
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Tech</span>
        </a>

        <a href="#" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src={image5} loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
  
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Tech</span>
        </a>
        <a href="#" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src={image6} loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
  
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Tech</span>
        </a>
      </div>
    </div>
  </div></div>
  )
}

export default GalleryCopy