import Image from 'next/image';
import shop1 from "/public/shop1.png"
import Link from 'next/link';

const Carousel1 = () => {
  return (
     <div className="bg-[url('/shop1.png')] bg-center bg-cover min-h-screen text-white">
    
      <div className='pl-40 py-48'><Link href="/product_List">
        <h5 className="text-base font-bold">SUMMER 2020</h5>
        <h1 className="text-6xl font-bold my-10">NEW COLLECTION</h1>
        <p className="text-xl font-normal my-4 w-96">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 text-white px-10 py-4 rounded-sm mt-4 hover:bg-green-600">
        <h3 className='font-bold text-2xl'> SHOP NOW </h3>
        </button>
        </Link>
      </div>

     </div>
      
    

  );
};

export default Carousel1;
