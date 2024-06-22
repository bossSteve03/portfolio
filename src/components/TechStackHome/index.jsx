import techItems from '../../pages/technologies/techItems'
import styles from './styles.module.css'

const TechStackHome = () => {
  return (
    <div className={`overflow-hidden ${styles['container']}`}>
      <div className={`w-max flex ${styles['animate-scroll']}`}>
        <ul className="flex flex-row mx-auto my-7 justify-center">
          {techItems.map((item, index) => (
              <li key={index} className="flex flex-col justify-between mx-4 h-28 text-center border border-transparent transform hover:scale-105 transition-transform duration-300">
                <div className=" mt-4 flex items-center">
                  <img src={item.icon} alt={item.name} className='w-12 my-0 mx-auto'/>
                </div>
                <div className='h-8 flex'>
                  <p className="w-16 text-xs self-center">{item.name}</p>
                </div>
              </li>
            ))}
        </ul>
        <ul className="flex flex-row mx-auto my-7 justify-center">
          {techItems.map((item, index) => (
              <li key={index} className="flex flex-col justify-between mx-4 h-28 text-center border border-transparent transform hover:scale-105 transition-transform duration-300">
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
    </div>
  );
};

export default TechStackHome;





