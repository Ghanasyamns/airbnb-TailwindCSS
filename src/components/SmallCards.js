import { Link } from 'react-router-dom';
import smallCardData from './smallCardData.json';
function SmallCards(props) {
  
  
  const singleCard = smallCardData?.map((card, i) => {
    return (
    <Link key={i} to={`/common/${card.location}`}>

      <div
        
        className="flex  items-center my-[15px] mx-2 h-[65px] rounded-lg hover:bg-gray-100 
         hover:scale-105 transition transform duration-200 ease-out"
      >
        <img
          className="object-cover w-[65px] h-[65px] rounded-lg"
          src={card.img}
          alt="..."
        />
        <div className="px-4 ">
          <h4>{card.location}</h4>
          <h5 className="text-gray-500">{card.distance}</h5>
        </div>
      </div>
      </Link>
    );
  });
  return (
    
    <div>
      <h1 className="my-3  text-3xl font-medium md:text-4xl  ">Explore Nearby</h1>
      <div className=" relative w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {singleCard}
      </div>
    </div>
  );
}

export default SmallCards;
