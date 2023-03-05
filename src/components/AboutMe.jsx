import React from 'react'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa';
import image5 from "../../src/assets/jeff5.JPG";
import {SiJavascript} from "react-icons/si"

const AboutMe = () => {
  return (
    <div>
  <section class="text-gray-600 body-font" id='about'>
  <div class="container px-5 py-2 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <h1 class="rounded-lg h-24 font-black text-5xl flex justify-center mt-3 p-5 text-center"> About <span className='bg-teal-800 text-gray-100 ml-4 pr-9 hover:bg-gray-800 hover:scale-125' >Me</span> </h1>
      
      <div class="flex flex-col sm:flex-row mt-1">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Jeffrey Asamoah</h2>
            <div class="w-12 h-1 bg-teal-800 rounded mt-2 mb-4"></div>
            <p class="text-base">I am Jeffrey Asamoah, web developer from Kumasi, Ghana. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
         

      
        <div class="container px-1 py-2 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class=" cursor-pointer justify-center flex title-font font-medium sm:text-4xl text-3xl text-gray-900 hover:scale-125"><FaReact className='text-teal-800'/></h2>
        
        <p class="leading-relaxed">React </p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class=" cursor-pointer hover:scale-125  justify-center flex title-font font-medium sm:text-4xl text-3xl text-gray-900"> <FaHtml5 className='text-teal-800'/></h2>
        <p class="leading-relaxed">HTML</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class=" cursor-pointer hover:scale-125 justify-center flex title-font font-medium sm:text-4xl text-3xl text-gray-900"><FaCss3 className='text-teal-800'/></h2>
        <p class="leading-relaxed">CSS</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class=" cursor-pointer hover:scale-125 flex justify-center title-font font-medium sm:text-4xl text-3xl text-gray-900"><SiJavascript className='text-teal-800'/></h2>
        <p class="leading-relaxed">JavaScript</p>
      </div>
    </div>
  </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
  
  
  
  </div>
  
  )
}

export default AboutMe