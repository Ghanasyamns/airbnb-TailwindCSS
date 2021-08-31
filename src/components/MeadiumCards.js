import { useState, useEffect } from "react";
import axios from "axios";
function MeadiumCards(props) {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    const liveData = async () => {
      const getData = await axios.get("https://links.papareact.com/zp1");
      setCard(getData.data);
    };
    liveData();
  }, []);
  const singleCard = cards?.map((card, i) => {
    return (
      <div
        key={i}
        className="  hover:scale-105 transform transition duration-200 ease-out"
      >
        <div className=" w-[310px] h-[310px]">
          <img className="object-cover rounded-xl" src={card.img} alt="..." />
        </div>
        <div className="my-3">
          <p className="text-2xl text-gray-900 ">{card.title}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="flex overflow-scroll scrollbar-hide   py-2 pl-2 space-x-3 ">
      {singleCard}
    </div>
  );
}

export default MeadiumCards;
