import axios from "axios";
import { useEffect, useState } from "react";
import CardSection from "./CardSection";
import Map from "./MapSection";
import "./Result.css";
function Result(props) {
  const [city, setCity] = useState({});
  const { cityName } = props.match.params;
  useEffect(() => {
    const getData = async () => {
      const respData = await axios.get(
        `${window.robHost}/venues/city/${cityName}`
      );
      setCity(respData.data);
    };
    getData();
  }, [cityName]);

  return (
    <div className="  result-grid">
      <div className="fonts mt-14  mx-5">
        <div className=" flex justify-center md:inline ">
          <h1 className="  text-xl md:text-3xl font-extrabold ">
            {city.header}
          </h1>
        </div>
        <div className="flex justify-start  space-x-3 my-6">
          <h1 className="hidden filters md:inline ">Instant Book</h1>
          <h1 className="hidden filters md:inline">Price</h1>
          <h1 className="hidden filters md:inline">Type of place</h1>
          <h1 className="hidden filters md:inline">Free cancellation</h1>
          <h1 className="filters">More filters</h1>
        </div>
        <h1 className="text-md text-gray-800 mb-6">
          {" "}
          Review COVID-19 travel restrictions before you book.
          <span className="underline cursor-pointer">Learn more</span>
        </h1>
        <CardSection city={city.venues} />
      </div>
      <div  className=" h-screen sticky top-[90px]">
        <Map />
      </div>
    </div>
  );
}

export default Result;
