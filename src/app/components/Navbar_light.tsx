import Image from "next/image"
import Vector1 from "/icons/Vector1.png"
import icn1 from "/icons/icn1.png"
import icn2 from "/icons/icn2.png"
import icn3 from "/icons/icn3.png"
import icn4 from "/icons/icn4.png"

export default function Navbar_light(){
    return(
        <div className="flex justify-between pl-9  pt-4 h-14">

            <h3 className="text-2xl font-bold w-46 h-15 ">Bandage</h3>

          
           <div className=" flex gap-4 pr-48  text-gray-500  w-85 h-6 font-semibold">
              Home
            <div>Shop</div>
            <div>
            <Image src={Vector1} alt="Vector1" width={11} height={13}  className="pt-2"/></div>
            
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>Pages</div>
        
           </div>
          
           <div className="  flex justify-end pr-5 pl-50 gap-3 w-80 h-12 text-blue-300 font-semibold">
            <div>
             <Image src={icn1} alt="icn1" width={16} height={16}/></div>
            <div>Login / Register</div>

            <div>
            <Image src={icn2} alt="icn2" width={16} height={16} /></div>
            <div>
            <Image src={icn3} alt="icn3" width={16} height={16} /></div>1
            
            <div><Image src={icn4} alt="icn4" width={16} height={16}/></div>1
              

            </div>
           




        </div>
    )
}