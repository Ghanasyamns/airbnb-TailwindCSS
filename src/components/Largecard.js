function Largecard() {
  return (
    <div className=" relative w-full h-[380px] my-3">
      <img
        className="absolute h-full w-full object-cover rounded-xl"
        src="https://links.papareact.com/4cj"
        alt="..."
      />
      <div className="absolute top-[75px] left-[50px]">
        <h3 className="text-4xl ">
          The Greatest
          <br /> Outdoors
        </h3>
        <p className="my-3 text-black">Wishlists curated by Airbnb.</p>
        <button className="bg-black text-white text-sm px-4 py-2 rounded-lg">
          Get Inspired
        </button>
      </div>
    </div>
  );
}

export default Largecard;
