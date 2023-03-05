import React from 'react'

const ExperienceCard = (props) => {
  return (
    
      <div>
        <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full ">
                 {props.icon}
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
        
            <div class="pb-8 ">
              <p class="text-gray-300 text-xs">{props.year}</p>
              <p class="mb-1 text-xl font-bold text-gray-600">{props.title}</p>
              <p class="text-gray-700">
                {props.desc}
              </p>
            </div>
            
        

          

            
          </div>
          

        
    </div>
  )
}

export default ExperienceCard