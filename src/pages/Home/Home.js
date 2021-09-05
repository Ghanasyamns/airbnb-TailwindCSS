import { useState, useEffect } from "react";

import Banner from "../../components/Banner";
import SmallCards from "../../components/SmallCards";
import MeadiumCards from "../../components/MeadiumCards";
import Largecard from "../../components/Largecard";
import axios from "axios";
import SliderCard from "../../components/SliderCard";
function Home() {
  const [recCities, setRecCities] = useState([]);
  const [Activities, setActivities] = useState([]);
  const [asia, setAsia] = useState({});
  const [europe, setEurope] = useState({});

  useEffect(() => {
    //recommended
    const reqData = async () => {
      const RecData = axios.get(`${window.robHost}/cities/recommended`);

      //activities
      const actData = axios.get(`${window.robHost}/activities/today`);
      //asia
      const asiaData = axios.get(`${window.robHost}/cities/asia`);

      //europe
      const europeData = axios.get(`${window.robHost}/cities/europe`);

      //axios.all
      axios.all([RecData, actData, asiaData, europeData]).then(
        axios.spread((...responses) => {
          setRecCities(responses[0].data);
          setActivities(responses[1].data);
          setAsia(responses[2].data);
          setEurope(responses[3].data);
          // use/access the results
        })
      );
    };
    reqData();
  }, []);

  return (
    <div>
      <Banner />
      <main className="  mx-5 px-8 sm:px-16">
        <section className="pt-3">
          <SmallCards />
        </section>
        <section>
          <h1 className="text-4xl my-3 font-semibold pb-5">Live Anywhere</h1>

          <MeadiumCards />
        </section>
        <section>
          <h1 className="text-4xl my-3 font-semibold pb-5">
            Recommended cities
          </h1>
          <SliderCard cards={recCities} />
        </section>
        <section>
          <h1 className="text-4xl my-3 font-semibold pb-5">
            Discover things to do
          </h1>
          <SliderCard cards={Activities} />
        </section>
        <section>
          <h1 className="text-4xl my-3 font-semibold pb-5">{asia.header}</h1>
          <SliderCard cards={asia.cities} />
        </section>
        <section>
          <h1 className="text-4xl my-3 font-semibold pb-5">{europe.header}</h1>
          <SliderCard cards={europe.cities} />
        </section>
        <Largecard />
      </main>
    </div>
  );
}

export default Home;
