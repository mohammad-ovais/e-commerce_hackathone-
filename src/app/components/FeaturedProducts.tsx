import React from "react";
import Image from "next/image";

const featured = [

  { id: 1, name: "Graphic design", price: "$16.48 $6.48", image: "/fixed.png", },
  { id: 2, name: "Product 1", price: "$100", image: "/fixed1.png", },
  { id: 3, name: "Product 1", price: "$100", image: "/fixed2.png", },
  { id: 4, name: "Product 1", price: "$100", image: "/fixed3.png", },
  { id: 5, name: "Product 1", price: "$100", image: "/fixed4.png", },
  { id: 6, name: "Product 1", price: "$100", image: "/fixed5.png", },
  { id: 7, name: "Product 1", price: "$100", image: "/fixed6.png", },
  { id: 8, name: "Product 1", price: "$100", image: "/fixed7.png", },

];

const FeaturedProducts= () => {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-3xl font-bold  mb-8">Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="shadow-md rounded-lg p-4 hover:shadow-lg "
            >
              <Image
                src={product.image}
                alt={product.name}
                width={239}
                height={427}
                
              />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.price}</p>
              <button className="mt-4 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
