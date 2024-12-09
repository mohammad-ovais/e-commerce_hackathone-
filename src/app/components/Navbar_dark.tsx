import Image from "next/image"
import Vector from "/icons/Vector.png"
import icn_xs from "/icons/icn_xs.png"
import insta from "/icons/insta.png"
import you from "/icons/you.png"
import fcb from "/icons/fcb.png"
import twtr from "/icons/twtr.png"

export default function Navbar_dark(){
    return(
        
         <div className=" flex justify-between px-6  text-white bg-slate-800   ">

          
           <div className="flex justify-start p-3 gap-1 ">
            <Image src={Vector} alt="Vector" width={16} height={16}/>
            <h6>(225)555-0118</h6> 
            </div>
    
            <div className="flex p-2 gap-1">
            <Image src={icn_xs} alt="icn_xs" width={16} height={16} />
            <p className="text-sm ">michelle.rivera@example.com</p>
            </div>
          

            <h6 className=" p-2  gap-2">Follow Us and get a chance to win 80% off</h6>

            <div className=" flex justify-end p-2 gap-2">
            <h6 className="text-sm">Follow Us :</h6>
            <div><Image src={insta} alt="insta" width={16} height={16}/></div>
            <Image src={you} alt="you" width={16} height={16}/>
            <Image src={fcb} alt="fcb" width={16} height={16}/>
            <Image src={twtr} alt="twtr" width={16} height={16}/>
            </div>


          </div>

        
    )
}