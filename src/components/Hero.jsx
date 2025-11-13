import React, { Fragment } from 'react';

const Hero = () => {
  return (
    <Fragment>
      <section
        id="home"
        className="relative min-h-screen flex justify-center items-center 
                   bg-linear-to-b from-teal-900 to-teal-800 
                   pt-16 pb-20 overflow-hidden"
      >

        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.68,168.19-17.16,250.45-.39C823.78,31.79,906.67,59.71,985,83.45c70,21.07,140,34.09,215,29.8v7.13H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#0f766e" // teal-700
            ></path>
          </svg>
        </div>
        <div className='absolute inset-0'></div>


        {/* content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center min-h-[400px]">
  <div className="flex-1 text-center md:text-left">
    <h3 className="text-teal-200 text-lg mb-4">Hello,</h3>
    <h1 className="text-white text-5xl font-extrabold font-cursive">
  I'm Pramudi Walakuluarachchi
</h1>

  </div>
</div>

      </section>
    </Fragment>
  );
};

export default Hero;
