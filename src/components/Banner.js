const config = require("../config");

function Banner() {
  return (
    <div className="relative mt-[-90px] h-[300px]  sm:h-[400px] lg:h-[500px]  xl:h-[600px] 2xl:h[700px]  ">
      <img
        className="absolute h-full w-full object-cover"
        src={config.bannerImg}
        alt="homebanner"
      />
      <div className="absolute top-1/2 w-full text-center ">
        <p className="text-sm  sm:text-lg">Not sure where to go ? Perfect</p>
        <button
          className="text-purple-500 font-bold bg-white px-10 py-4 rounded-full shadow-md my-3
         hover:shadow-xl active:scale-90 transition transform duration-150 ease-out"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
