import React,{useEffect} from 'react'

import ExperienceCard from "./ExperienceCard";
import ExperienceData from "./ExperienceData";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Experience = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });

  },[])
  return (
    <section>
    <div class="bg-white py-6 sm:py-8 lg:py-12" id="education">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="mb-10 md:mb-16">
          <h2 class="text-gray-800 text-5xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
            Education and  <span className="bg-teal-800 text-gray-100 pr-9 pt-4 pb-4 hover:bg-gray-800 ">Experience</span>
          </h2>

          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-2 md:px-8 md:mx-10 mx-auto ml-6 mr-6">
        <div class="w-3/3 lg:shadow-xl lg:p-8 lg:mr-20 rounded-lg " data-aos="zoom-in-left">
          
              
              
            {ExperienceData.map((val, id)=>{


if (val.category==="education"){
  return(
    <ExperienceCard key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
  );
}
})}
</div>

<div class="w-3/3 lg:shadow-xl lg:p-8 lg:mr-9 rounded-lg" data-aos="zoom-in-right">
{ExperienceData.map((val, index)=>{


if (val.category=== "experience"){
  return(
    <ExperienceCard key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
  );
}
})}

            
              
           
          </div>
       
      </section>
    </div>
    </section>
  );
};

export default Experience;
