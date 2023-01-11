import axios from "axios";
import { useEffect, useState, createContext } from "react";
import CardSection from "./CardSection";
import Map from "./MapSection";
import "./Result.css";
import commondata from "./commonResult.json";

export const activeContext = createContext();

function Result(props) {
  let pathCheck = props.location.pathname.includes("/city");
  let cityName;
  let location;
  pathCheck
    ? ({ cityName } = props.match.params)
    : ({ location } = props.match.params);
  //for colour change in map when mouse over on cards
  const [active, setActive] = useState(null);
  const updateActive = (value) => setActive(value);
  const [city, setCity] = useState({});
  const [common, setCommon] = useState([]);
  useEffect(() => {
    if (pathCheck) {
      const getData = async () => {
        const respData = await axios.get(
          `${window.robHost}/venues/city/${cityName}`
        );
        setCity(respData.data);
      };
      getData();
    } else {
      setCommon(commondata);
    }
  }, [pathCheck, cityName]);

  return (
    <activeContext.Provider value={{ active: active, update: updateActive }}>
      <div className="  result-grid">
        <div className="fonts mt-14  mx-5">
          <div className=" flex justify-center md:inline ">
            <h1 className="  text-xl md:text-3xl font-extrabold ">
              {pathCheck ? city.header : `Rentals in ${location}`}
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
          <CardSection city={pathCheck ? city.venues : common} />
        </div>
        <div className=" map-section  h-screen sticky top-[90px]">
          <Map data={pathCheck ? city.venues : common} />
        </div>
      </div>
    </activeContext.Provider>
  );
}

export default Result;
