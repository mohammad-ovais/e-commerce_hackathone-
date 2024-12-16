import Image from "next/image"
import Vector from "/icons/Vector.png"
import icn_xs from "/icons/icn_xs.png"
import insta from "/icons/insta.png"
import you from "/icons/you.png"
import fcb from "/icons/fcb.png"
import twtr from "/icons/twtr.png"

export default function Header(){
    return(
        
         <div className=" flex justify-between px-5 h-16 p-2  text-white text-sm font-semibold bg-[#23856D]">

          
           <div className=" flex items-center gap-1 ">
            <div><Image src={Vector} alt="Vector" width={16} height={16}/></div>
            <h6>(225)555-0118</h6> 
           </div>
    
           <div className=" flex items-center gap-1 mr-40 ">
            <div className=" pl"><Image src={icn_xs} alt="icn_xs" width={16} height={12} /></div>
            <p>michelle.rivera@example.com</p>
           </div>
          

            <h6 className="flex items-center gap-3 mr-32">Follow Us and get a chance to win 80% off</h6>

           <div className="flex items-center gap-2">
            <h6>Follow Us :</h6>
            <div><Image src={insta} alt="insta" width={28} height={28}/></div>
            <div><Image src={you} alt="you" width={28} height={28}/></div>
            <div><Image src={fcb} alt="fcb" width={28} height={28}/></div>
            <div><Image src={twtr} alt="twtr" width={28} height={28}/></div>
           </div>
 
         </div>

        
    )
}