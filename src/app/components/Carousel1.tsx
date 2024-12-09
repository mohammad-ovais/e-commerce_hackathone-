import Image from 'next/image';
import shop1 from '../Image/shop1.png'; // Replace with your image path

const Carousel1 = () => {
  return (
   <main className='flex items-center justify-between'>
    <div>
     <div>
    <Image src={shop1} alt='shop1'width={1439} height={716} /></div>

    <div className="  p-8 md:p-16 ">
    
       className="max-w-md md:mr-8"
        <p className="uppercase text-sm">Summer 2020</p>
        <h1 className="text-4xl md:text-5xl font-bold my-4">NEW COLLECTION</h1>
        <p className="text-lg my-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md font-bold mt-4 hover:bg-green-600">
          SHOP NOW
        </button>
     </div>
      
    </div>
    </main>
  );
};

export default Carousel1;
