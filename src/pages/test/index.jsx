import { useEffect } from 'react';

const TechStackHome = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Check if reduced motion is preferred, otherwise add animations
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // Direct DOM manipulation should be minimized in React
        scroller.setAttribute("data-animated", true);

        // Consider using React's ref system for DOM interactions instead
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary-800 text-neutral-100 font-sans py-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Infinite Scroll Animation</h1>

      {/* First Scroller */}
      <div className="scroller w-full max-w-600px mb-8 overflow-hidden relative" data-speed="fast">
        <ul className="tag-list scroller__inner flex gap-4">
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">HTML</li>
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">CSS</li>
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">JS</li>
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">SSG</li>
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">webdev</li>
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">animation</li>
          <li className="py-2 px-4 bg-primary-400 rounded-md shadow-md">UI/UX</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStackHome;