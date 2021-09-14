import axios from 'axios';
import { useEffect ,useState} from 'react';
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon,UploadIcon } from "@heroicons/react/outline";
import VenueDetails from './VenueDetails';
function BookingHome(props) {
    const [venueData, setVenueData] = useState({})
    const id=props.match.params.venueId
    useEffect(() => {
        const url=`${window.robHost}/venue/${id}`
        const getData= async() => {
            const resp=await axios.get(url)
            setVenueData(resp.data)
            
            
        };
        getData()
    }, [id])
    
    return (
        <section className="flex flex-col    md:mx-[5%] lg:mx-[13%] md:my-6">
             <img src={venueData?.imageUrl} alt="hotel" className="w-full max-h-[500px] md:rounded-xl
             object-cover md:order-2 " />
            <div className=" mx-5 md:mx-0 md:order-1  border-b-[1px] border-gray-300 md:border-none">
                <h1 className="mt-3 text-xl md:text-3xl font-medium">
                    {venueData?.title?.charAt(0).toUpperCase()+venueData?.title?.slice(1).toLowerCase()}@{venueData.location}
                    </h1>
                <div className="flex space-x-1 relative my-2" >
              <StarIcon className="w-5 h-5 text-red-400 " />
              <h1 className="font-semibold">
                {venueData?.rating} </h1>
                <span className="text-gray-700 ml-1 underline">( 5 reviews )  </span>
                <span className="text-gray-700">{venueData?.guests} guests</span>
                 <span className="hidden md:inline-flex  font-medium underline absolute  right-0 " >
                 <UploadIcon className="h-5 w-5 "/> <h1 >share</h1>
                 <HeartIcon className="h-5 w-5 ml-4" /> <h1 >save</h1>
                     </span>
            </div>
            </div>
            <section className="   md:order-3 my-4 ">
           <VenueDetails venueData={venueData} />
           </section>
        </section>
    )
}

export default BookingHome


// {id: 9, uid: 1, title: 'I SETTE CONI - TRULLO EDERA', location: 'Ostuni, Brindisi, Italy', rating: 4.83, …}
// amenities: "Wifi, Kitchen, Heating, Free Parking"
// details: "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).\nTrullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.\nIt's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.\nYou can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.\n\nPrices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity."
// guests: 4
// id: 9
// imageUrl: "https://airbnb-clone-prexel-images.s3.amazonaws.com/waypoints/Ostuni.jpg"
// location: "Ostuni, Brindisi, Italy"
// points: "Entire home,Sparkling clean,Superhost,Great location"
// pricePerNight: 72
// rating: 4.83
// title: "I SETTE CONI - TRULLO EDERA"
