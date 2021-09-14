import { ArrowRightIcon } from "@heroicons/react/solid";
import ReserveCard from "./ReserveCard";
function VenueDetails(props) {

//   console.log(props.venueData.amenities.split(','));
const points = props.venueData.points?.split(',').map((point,i)=>
   <li className="flex" key={i}><ArrowRightIcon className="w-5 h-5 mr-2 mt-1"/>{point}</li>
    
)
    console.log(props.venueData);

    return (
        <div className="flex flex-col ml-5 mr-5  md:ml-0 md:mr-0 md:flex-row  ">
            
       <div className="  w-full  pr-5">
           <div className="text-lg border-t-[1px] border-b-[1px] py-2 mb-3 text-gray-700 ">
               <h1>{props.venueData.amenities?.split(',').join('.')}
               </h1>
               </div>
        {/* points section */}
           <div className="border-b-[1px] border-gray-300 ">
           <h1 className="text-2xl mb-2 font-medium">What this place offers</h1>
           <ul className="text-lg space-y-3 pb-3 text-gray-700">
               {points}
           </ul >
           </div>
           <div className="border-b-[1px] border-gray-300 pb-4">
               <h1 className="text-2xl my-2 font-medium"> Details</h1>
               <p className="text-gray-700 text-lg ">{props.venueData.details}</p>
           </div>
       </div>
       <div className="hidden md:inline  w-[40%] max-h-[300px] rounded-xl shadow-lg p-6">

               <ReserveCard rating={props.venueData.rating}
                price={props.venueData.pricePerNight}/>
        </div>

               </div> 
    )
}

export default VenueDetails
