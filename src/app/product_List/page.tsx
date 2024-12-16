import Navbar_light from "../components/Navbar_light"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Vector2 from "/icons/Vector2.png"
import Vector3 from "/icons/Vector3.png"
import Vector4 from "/icons/Vector4.png"
import Vector5 from "/icons/Vector5.png"
import Vector6 from "/icons/Vector6.png"
import Vector7 from "/icons/Vector7.png"
import Link from "next/link"

const items = [
    { id: 1, title: "CLOTHS", image: "/card.jpg" },
    { id: 2, title: "CLOTHS", image: "/card1.jpg" },
    { id: 3, title: "CLOTHS", image: "/card2.jpg" },
    { id: 4, title: "CLOTHS", image: "/card3.jpg" },
    { id: 5, title: "CLOTHS", image: "/card4.jpg" },
  ];

export default function(){
return(
  <div>
   <Header/>
   <Navbar_light/>

<section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-200 h-60 flex items-center justify-center" >
                   <Link href="/product1">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-semibold text-lg">
              <div className="text-center">
                <h3>{item.title}</h3>
                <p>5 Items</p>
              </div>
            </div>
                    </Link>
          </div>
        ))}
      </div>

      {/* Views and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <h6 className="font-bold text-base text-[#737373]">Showing all 12 results</h6>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Grid
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            List
          </button>
          <select className="px-4 py-2 bg-gray-200 rounded">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>
                        {/* Partner logos */}
      <div className="flex justify-between my-12 gap-7">
     <Image src={Vector2} alt="vector2" width={102} height={33.81} className="text-[#737373] "/>
     <Image src={Vector3} alt="vector3" width={83} height={58.96} className="text-[#737373]"/>
     <Image src={Vector4} alt="vector4" width={102} height={74.84} className="text-[#737373] "/>
     <Image src={Vector5} alt="vector5" width={102.98} height={41.98} className="text-[#737373] "/>
     <Image src={Vector6} alt="vector6" width={103.68} height={61.75} className="text-[#737373]"/>
     <Image src={Vector7} alt="vector7" width={75.75} height={71.86} className="text-[#737373]"/>
        </div>
</section>
     <Footer/>








  </div>
 )
}
