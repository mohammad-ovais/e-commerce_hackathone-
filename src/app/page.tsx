import Image from "next/image";
import Carousel2 from "./components/Carousel2";
import FeaturedProducts from "./components/FeaturedProducts";
import Navbar_dark from "./components/Navbar_dark";
import Navbar_light from "./components/Navbar_light";
import Footer from "./components/Footer";
import React from 'react'


const Home = () => {
  return (
    <main>
    <Navbar_dark/>
    <Navbar_light/>

    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">EDITOR'S PICK</h2>
        <p className="text-gray-600">Problems trying to resolve the conflict between</p>
      </div>
      <div className="grid grid-rows-2  sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {/* Men */}
        <div className="row-span-2 col-span-2 relative group">
          <img
            src="/media1.png"
            alt="Men"
            className=" object-cover" width={510} height={500}
          />
          <div className="absolute inset-0 bg-opacity-30 flex items-end p-5 group-hover:bg-opacity-50 transition">
            <button className="bg-white text-slate-800 px-14 py-3 text-base font-bold ">
              MEN
            </button>
          </div>
        </div>

        {/* Women */}
        <div className=" row-span-2 relative group">
          <img
            src="/media2.png"
            alt="Women"
            className=" object-cover"width={240}height={500}
          />
          <div className="absolute inset-0 bg-opacity-30 flex items-end p-5 group-hover:bg-opacity-50 transition">
            <button className="bg-white text-slate-800 px-12 py-3 text-base font-bold ">
              WOMEN
            </button>
          </div>
        </div>

        {/* Accessories */}
        <div className=" row-span-1 relative group">
          <img
            src="/media3.png"
            alt="Accessories"
            className=" object-cover"width={240} height={242}
          />
          <div className="absolute inset-0  bg-opacity-30 flex items-end p-5 group-hover:bg-opacity-50 transition">
            <button className="bg-white text-slate-800 px-6 py-3 text-base font-bold ">
              ACCESSORIES
            </button>
          </div>
        </div>

        {/* Kids */}
        <div className=" row-span-1 relative group">
          <img
            src="/media4.png"
            alt="Kids"
            className="object-cover " width={240} height={242}
          />
          <div className="absolute inset-0  bg-opacity-30 flex items-end p-5 group-hover:bg-opacity-50 transition">
            <button className="bg-white text-slate-800 px-10 py-3 text-base font-bold ">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>

    <FeaturedProducts/>
   <Carousel2/>
   <Footer/>
    </main>
  );
};

export default Home;











    
