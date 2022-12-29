import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#0a192f]'>

{/*container*/}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
  <p className='text-pink-600'>Hi my name is </p>
  <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Samiksha Wankhade</h1>
  <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I'm a Web Developer.</h2>
  <p className='text-[#8892b0] py-4 max-w-[700px]'>I am holding Master's Degree in Computer Applications' (MCA ) .
I have knowledge in HTML ,CSS ,Javascript(Basic) and React . I
am good at self learning, each new skills in my bucket helped me
grow as an individual .More interested in Technologies and Web
Development field and seeking for exciting opportunities related to
the field that can help build an experience , to learn and grow and
I am always curious about things and enjoy learning and looking
forward to any opportunity that I receive.</p>
<div>
  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600  hover:border-pink-600'>
    View Work
  <span className="group-hover:rotate-90 duration-300">
  <HiArrowNarrowRight className='ml-3 ' />
  </span>
  
  </button>
</div>

</div>


    </div>
  )
}

export default Home;