import React,{useEffect} from 'react'
import image1 from "../../src/assets/jeff.JPG";
import image2 from "../../src/assets/jeff4.JPG";

import CV from '../assets/cv/CV.pdf'
import Resume from '../assets/cv/Resume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { TypeAnimation } from 'react-type-animation';

import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Hero = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });

  },[])

  return (



<div> 
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">


<section class="max-w-screen-2xl   px-4 md:px-8 mx-auto">
<div class="flex flex-wrap justify-between mb-8 md:mb-16">
<div class="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
{/* <h1 class="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-2">Jeffrey <br />Asamoah</h1> */}
<h1 class="text-gray-900 text-4xl sm:text-5xl md:text-9xl font-bold mb-4 md:mb-2 md:mt-10 " data-aos="fade-right"> <span className='bg-teal-800 text-gray-100 pl-9'>Je</span>ffrey <br />Asamoah</h1>
<div>


</div>
<p class="max-w-md text-gray-500 xl:text-lg leading-relaxed">
  
  Hi, 
    <TypeAnimation className='text-gray-800' sequence={[
    // Same String at the start will only be typed once, initially
    " I'm a Frontend Developer",
    1000,
    " I'm an Ui/Ux Designer",
    1000,
    " I'm a Graphic Designer",
    1000,
    
  ]}
  speed={50} repeat={Infinity}
/>
<br />
   and I graduated from the University of Energy and Natural Resources in 2021 with a degree in Computer Science.</p>


<div class="sm:flex sm:gap-4 ">


{/* <a href='../../src/assets/num.pdf' download={true} >  */}
<a href={CV} download={true}> 
<button class="bg-teal-800 hover:bg-gray-800 text-white font-meduim py-1.5 px-3 rounded-md shadow mt-4 mr-2"> Download CV</button></a>
<a href={Resume} download={true}> 
<button class="bg-gray-800 hover:bg-teal-800 text-white font-meduim py-1.5 px-5 rounded-md shadow mt-4"> Resume</button></a>
</div>


    
</div>
<div class="mb-12 flex w-full md:mb-16 lg:w-3/5 lg:mt-16">
        <div class="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
          <img src={image1} loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
        </div>

        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src={image2} loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
        </div>
      </div>
</div>

<div class="flex flex-col md:flex-row justify-between items-center gap-8">
<div class="w-64 h-12 flex rounded-lg overflow-hidden divide-x">

</div>

<div class="flex justify-center lg:justify-start items-center gap-4">
<span class="text-gray-800 text-sm sm:text-base font-semibold tracking-widest uppercase">Social</span>
<span class="w-12 h-px bg-teal-800"></span>

<div class="flex gap-4">
  <a href="#" target="_blank" class="text-teal-800 hover:text-gray-400 active:text-gray-600 transition duration-100 text-2xl">
    <FaInstagram/>
  </a>
  <a href="#" target="_blank" class="text-teal-800 hover:text-gray-400 active:text-gray-600 transition duration-100 text-2xl"> <FaLinkedin/></a>
  <a href="#" target="_blank" class="text-teal-800 hover:text-gray-400 active:text-gray-600 transition duration-100 text-2xl">
    <FaTwitter/>
  </a>
  
  
</div>
</div>

</div>
</section>
</div>










</div>












)
}

export default Hero;