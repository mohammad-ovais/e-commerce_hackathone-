import Image from "next/image"
import Vector1 from "/icons/Vector1.png"
import icn1 from "/icons/icn1.png"
import icn2 from "/icons/icn2.png"
import icn3 from "/icons/icn3.png"
import icn4 from "/icons/icn4.png"
import Link from "next/link"

export default function Navbar_light(){
    return(
        <div className="flex justify-between items-center pl-9 h-20">

          <h3 className=" flex text-2xl font-bold ">Bandage</h3>

           <div className=" flex items-center gap-4 pr-48  text-gray-500 font-bold text-sm">
             <Link href="/" >Home</Link>
            <div>Shop</div>
            <div> <Image src={Vector1} alt="Vector1" width={10} height={12} /></div>
            
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>Pages</div>
           </div>
          
           <div className="  flex items-center w-80 h-12 text-blue-300  font-semibold">

            <div className="p-1"> <Image src={icn1} alt="icn1" width={12} height={12}/></div>
              <div className="p-1">Login / Register</div>

            <div className="p-4"> <Image src={icn2} alt="icn2" width={16} height={16} /></div>

            <div className=" flex p-4 gap-1  font-normal text-xs">
              <Image src={icn3} alt="icn3" width={15} height={15}/>
               1 </div>
            
            <div className="flex p-3 gap-1 font-normal text-xs">
                <Image src={icn4} alt="icn4" width={16} height={15}/>
                 1 </div>
              
           </div>
           
        </div>
    )
}