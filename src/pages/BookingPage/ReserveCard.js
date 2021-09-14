import { StarIcon,MinusIcon, PlusIcon } from "@heroicons/react/solid"
import { ChevronDownIcon,ChevronUpIcon,MinusCircleIcon,PlusCircleIcon } from "@heroicons/react/outline"
import './booking.css'
import { useState } from "react"
function ReserveCard(props) {
    const [guestActive, setGuestActive] = useState(false)
    
    const plusAndMinus=(
        <div className="space-x-3  flex">
                <span className="icon-outline">
         <MinusIcon className="icon-inline"/>
         </span>
             <span>1</span>
             <span className="icon-outline">
        <PlusIcon className="icon-inline"/>
        </span>
                               

        </div>
    )
    console.log(guestActive);
    
    return (
        <>
       <div className="flex flex-wrap justify-between w-full ">
                   <div className="flex">
                   <h1 className="text-2xl font-medium text-gray-800">${props.price }</h1>
                   <span className="text-lg text-gray-600"> / night</span>
                   </div>
                   <div className="flex  ">
                   <StarIcon className="w-5 h-5 text-red-400 " />
                   <h1 className="font-medium">
                {props.rating} </h1>
                <span className="text-gray-700 ml-1 underline">( 5 reviews )  </span>

                   </div>
               </div>
              <div className="relative w-full h-[110px] my-4 flex  flex-wrap border 
               border-gray-500 rounded-lg ">
                  <input type="text" placeholder="CHECKIN" className=" w-[50%] h-[50%] border-r-[1px] border-b-[1px]
                   border-gray-500 rounded-tl-lg placeholder-gray-700 pl-2"/>
                  <input type="text" placeholder="CHECKOUT" className=" h-[50%] w-[50%] border-b-[1px] border-gray-500 
                  rounded-tr-lg placeholder-gray-700 pl-2"/>
                  <div onClick={()=>setGuestActive(true)}  className={`relative w-full h-[50%] rounded-lg pl-2
                  ${guestActive?'border-2 border-gray-700':''}
                  `}>
                    <h1 className="absolute top-0 text-sm font-medium ">GUESTS</h1>
                    <h1 className=" absolute bottom-3 text-sm text-gray-700 ">1 guests</h1>
                   {guestActive?(<>
                   <ChevronUpIcon className="w-6 h-6 absolute right-3 top-4 text-gray-700"/>
                   <div className="absolute bottom-[-324px] left-[-3px]   w-[102%] h-[320px]
                    rounded-lg shadow-2xl bg-white ">
                        <div className="relative p-5 space-y-6 h-full ">
                            {/* adults */}
                       <div className="flex justify-between ">
                           <h1 className="text-lg font-medium">Adults</h1>
                           {plusAndMinus}
                       </div>
                       {/* childrens */}
                       <div className="flex justify-between ">
                           <h1 className="text-lg font-medium">Childern</h1>
                           {plusAndMinus}
                       </div>
                       {/* infants */}
                       <div className="flex justify-between ">
                           <h1 className="text-lg font-medium">Infants</h1>
                          {plusAndMinus}
                       </div>
                       <div>
                           <p className='text-gray-600'>
                           5 guests maximum. Infants don’t count toward the number of guests.
                           </p>
                       </div>
                       <div  onClick={()=>
                           setGuestActive(!guestActive)
                           } className='absolute bottom-4 right-5 text-lg font-medium underline'>
                               Close
                               </div>
                      </div>
                    </div>
                       </>
                   ):
                   ( <ChevronDownIcon className="w-6 h-6 absolute right-3 top-4 text-gray-700"/>)}
                   
                  </div>

              </div>
              <button type="submit" className="btn-bg w-full h-[50px] rounded-lg my-2 text-white" >Check Availability</button>
               </>

    )
}

export default ReserveCard
