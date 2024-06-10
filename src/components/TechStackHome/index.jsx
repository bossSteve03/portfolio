import techItems from '../../pages/technologies/techItems'

const TechStackHome = () => {
  return (
    <div className='animate'>
      <ul id="tech-stack" className="w-2/5 overflow-hidden flex flex-row mx-auto my-7 gap-7 justify-center">
        {techItems.map((item, index) => (
            <li key={index} className="flex flex-col justify-between h-28 text-center border border-transparent transform hover:scale-105 transition-transform duration-300">
              <div className=" mt-4 flex items-center">
                <img src={item.icon} alt={item.name} className='w-12 my-0 mx-auto'/>
              </div>
              <div className='h-8 flex'>
                <p className="w-16 text-xs self-center">{item.name}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TechStackHome;





