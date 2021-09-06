import { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import "./Result.css";
function CardSection(props) {
const [toggleColour, settoggleColour] = useState(false)


  const singleCard = props.city?.map(
    ({ imageUrl, pricePerNight, rating, title, location },i) => {
      return (
        <div key={i} className="relative  flex flex-col md:py-4 md:flex-row md:border-b-[1px] border-gray-200 ">
          <div className="md:w-72 md:h-62 ">
            <img
              className="object-cover w-full h-full max-h-[450px] rounded-xl"
              src={imageUrl}
              alt="rentalImg"
            />
          </div>
          <div className="relative  my-4 md:ml-5 flex-grow">
            <div className="flex space-x-1 md:absolute bottom-0 left-0">
              <StarIcon className="w-5 h-5 text-red-400 " />
              <h1 className="md:font-bold">
                {rating} </h1>
                <span className="text-gray-500 ml-1">(5)</span>
             
            </div>
            <div className="text-xl">
              <h1 className="md:text-base md:text-gray-500">
               Entire cottage.{location.charAt(0).toUpperCase()+location.slice(1).toLowerCase()}
                </h1>
              <h1>{title.charAt(0).toUpperCase()+title.slice(1).toLowerCase()}</h1>
            </div>
            <div className="hidden md:inline ">
              <h1 className="text-gray-400">4 guests. 1 bedroom.2 beds.1 bathroom<br/>wifi.kitchen.Free parking</h1>
            </div>
            <div className="text-lg flex md:absolute bottom-0 right-0">
              <h1 className="font-bold">${pricePerNight} </h1>
              <span>/ night</span>
            </div>
          </div>
          <button  onClick={(e)=>{
             !toggleColour?e.target.style.fill='#F84711':e.target.style.fill='none'
              settoggleColour(!toggleColour)
            
              }}>
          
             <HeartIcon  id='fav-icon'  className=' absolute  top-0 right-0 w-7  h-7 mt-3 mr-3 text-white
             active:scale-110 transition transform duration-150 ease-in  md:hidden'/> 
          
            <HeartIcon id='fav-icon' className="hidden md:inline absolute top-3 right-0 w-7 h-7 mt-3 mr-3 
            active:scale-110 transition transform duration-150 ease-in" />
            </button>
        </div>
      );
    }
  );
  return <div className="font-card">{singleCard}</div>;
}
export default CardSection;

// id: 9
// ​​​
// imageUrl: "https://airbnb-clone-prexel-images.s3.amazonaws.com/waypoints/Ostuni.jpg"
// ​​​
// location: "melbourne"
// ​​​
// pricePerNight: 72
// ​​​
// rating: 4.83
// ​​​
// title: "I SETTE CONI - TRULLO EDERA"
