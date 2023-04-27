import React,{useEffect} from 'react'
import { useState } from 'react';
import GalleryMenu from './GalleryMenu';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Gallery = () => {
  const [items,setItems]=useState(GalleryMenu);
  const filterItem=(categoryItem)=>{
    const updatedItems=GalleryMenu.filter((curElem) =>{
      return curElem.category===categoryItem;

    });
    setItems(updatedItems);
  }
  useEffect(()=>{
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });

  },[])
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12" id='project'>
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
  
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-5xl font-bold text-center mb-4 md:mb-6">Proj<span className='bg-teal-800 text-gray-100  pr-9 hover:bg-gray-800'>ects</span></h2>
  
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      

      
      <div className='flex justify-center mt-2'>  
      <div class="w-100 h-12 flex border rounded-lg overflow-hidden divide-x bg-gray-250">
      <a  class="p-5 cursor-pointer flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100" onClick={()=> setItems(GalleryMenu)}>All</a>
        <a class="p-5 cursor-pointer flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100" onClick={()=> filterItem("Graphic Design")}>Graphic Design</a>
        <a  class=" p-5 cursor-pointer flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100" onClick={()=> filterItem("web")}>Web</a>
        <a  class="p-5 cursor-pointer flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100" onClick={()=> filterItem("Ui/Ux")}>Ui/Ux</a>
      </div>
      </div>
      </div>
      
  
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8 " data-aos="zoom-in-up">

      {items.map((elem)=>{

const {id,image,title,category}=elem;
return(

  <a href="#gallery" class="group h-30 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative "key={id} >
  <img src={image} loading="lazy" alt="projects" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200 " />

  <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

  <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">{category}</span>
</a>

)})}
        
        
      </div>
    </div>
  </div></div>
  )
}

export default Gallery