import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MeadiumCard.css";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
function SliderCard(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const singleCard = props.cards?.map((item, i) => {
    return (
      <Link key={i} to={`/city/${item.cityName || item.activityType}`}>
        <div className="my-2  hover:scale-105 transform transition duration-200 ease-out">
          <img
            className="object-cover w-[90%]   h-72  rounded-xl"
            src={item.image}
            alt="..."
          />
          <div className="my-3">
            <p className="text-2xl text-gray-900 ">
              {item.cityName || item.activityType}
            </p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="slick ">
      <Slider {...settings}> {singleCard}</Slider>
    </div>
  );
}

export default SliderCard;
