import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Kanhaiya Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a passionate BTech student with a flair for frontend development. My journey through technology has ignited my creative drive, resulting in captivating and user-centric web interfaces. With a strong foundation in coding and an eye for design, I strive to craft immersive digital experiences that seamlessly blend form and function.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
