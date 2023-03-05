import React from 'react'
import image2 from "../../src/assets/jeff4.JPG";
import { FaInstagram,FaLinkedin,FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
 <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class=" text-4xl sm:text-3x font-bold title-font mb-4 text-gray-900">Contact <span className='bg-teal-800 text-gray-100 pr-10 hover:bg-gray-800 hover:scale-125 '> Me</span></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Let's Talk about everything.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-teal-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Send Message</button>
        </div>
        
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-teal-800">asamoahjeffrey77@gmail.com</a>
          <p class="leading-normal my-5">(+233) 50 930 3861
            <br/>All Rights Reserved
          </p>
          <span class="inline-flex">
          <div class="flex gap-4">
          <a href="#" target="_blank" class="text-teal-800 hover:text-gray-400 active:text-gray-600 transition duration-100 text-2xl">
            <FaInstagram/>
          </a>
          <a href="#" target="_blank" class="text-teal-800 hover:text-gray-400 active:text-gray-600 transition duration-100 text-2xl"> <FaLinkedin/></a>
          <a href="#" target="_blank" class="text-teal-800 hover:text-gray-400 active:text-gray-600 transition duration-100 text-2xl">
            <FaTwitter/>
          </a>
          
          
        </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</section> 


        </div>

  )
}

export default Contact;