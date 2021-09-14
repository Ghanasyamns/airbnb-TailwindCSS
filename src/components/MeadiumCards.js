
import { Link } from 'react-router-dom';
import meadiumCardData from './meadiumCardData.json'
function MeadiumCards(props) {
  
  const singleCard = meadiumCardData?.map((card, i) => {
    return (
    <Link  key={i} to={`/common/${card.title}`}>

      <div
         className="  hover:scale-105 transform transition duration-200 ease-out"
      >
        <div className=" w-[310px] h-[310px]">
          <img className="object-cover rounded-xl" src={card.img} alt="..." />
        </div>
        <div className="my-3">
          <p className="text-2xl text-gray-900 ">{card.title}</p>
        </div>
      </div>
      </Link>
    );
  });
  return (
    <div className="flex overflow-scroll scrollbar-hide   py-2 pl-2 space-x-3 ">
      {singleCard}
    </div>
  );
}

export default MeadiumCards;
