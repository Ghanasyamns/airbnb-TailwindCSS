import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import "./Result.css";
function CardSection(props) {
  console.log(props.city);
  console.log(window.location.pathname);
  const singleCard = props.city?.map(
    ({ imageUrl, pricePerNight, rating, title, location }, i) => {
      return (
        <div key={i} className="relative grid grid-rows-4 mb-6">
          <div className="row-span-3 ">
            <img
              className="object-cover w-full h-full max-h-[450px] rounded-xl"
              src={imageUrl}
              alt="rentalImg"
            />
          </div>
          <div className="relative row-span-1 mt-2 ">
            <div className="flex space-x-1">
              <StarIcon className="w-5 h-5 text-red-400 " />
              <h1>
                {rating}
                <span className="text-gray-500 ml-1">(5)</span>
              </h1>
            </div>
            <div className="text-lg">
              <h1>Entire cottage.{location}</h1>
              <h1>{title}</h1>
            </div>
            <div className="text-lg flex">
              <h1 className="font-bold">${pricePerNight} </h1>
              <span>/ night</span>
            </div>
          </div>
          <svg className="absolute top-0 right-0 w-8 h-8 mt-3 mr-3  text-white  active:fill-current">
            <HeartIcon />
          </svg>
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
