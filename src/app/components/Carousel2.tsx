import Image from "next/image";

// components/ProductSection.jsx
export default function Carousel2() {
    return (
     <div className="bg-emerald-700">
        <div className="flex text-white pl-52 gap-8">
        
          <div className="pt-44">
            <h4 className="text-xl uppercase tracking-wide font-medium">Summer 2020</h4>
            <h1 className="text-6xl font-bold py-8 ">Vita Classic</h1>
            <h1 className="text-6xl font-bold pb-8">Product</h1>
            <p className="text-sm font-normal mt-4 w-80">
              We know how large objects will act, We know how are objects will act. We know.
            </p>
            <div className="flex gap-4 mt-8">
              <span className="text-2xl font-bold py-2">$16.48</span>
              <button className="bg-green-500 text-white px-10 gap-2 py-4 rounded hover:bg-green-700 transition">
               <h3 className="text-sm font-bold">ADD TO CART</h3>
              </button>
            </div>

          </div>
          
          <div className="mt-28 pl-20">
            <img
              src="/shop2.png"
              alt="Model"
              width={443}
              height={685}/>
          </div>

        </div>

      </div>
    );
  }
  