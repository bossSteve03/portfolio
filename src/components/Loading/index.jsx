import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animation_llxm8r05.json'; // Replace with your animation file path

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen gap-5">
      <Lottie
        className='w-72 my-0 mx-auto'
        animationData={loadingAnimation} // Provide your animation JSON here
        loop={true}
        autoplay={true}
      />
      <p className='my-0 mx-auto text-3xl'>Loading...</p>
    </div>
  );
};

export default LoadingScreen;





