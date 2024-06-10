import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Tech Enthusiast', 'Software Apprentice', 'Web Developer'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };

    // Create a new Typed instance
    typedRef.current = new Typed('#typed-output', options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs only once

  return <div id="typed-output"></div>;
};

export default TypedText;
