// components/ProductSection.jsx
export default function Carousel2() {
    return (
      <div className="bg-teal-700 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Text Content */}
          <div className="text-white space-y-4">
            <p className="text-sm uppercase tracking-wider font-medium">Summer 2020</p>
            <h1 className="text-4xl lg:text-5xl font-bold">Vita Classic Product</h1>
            <p className="text-base font-light">
              We know how large objects will act, We know how are objects will act. We know.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-lg font-bold">$16.48</span>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div>
            <img
              src="/shop2.png"
              alt="Model"
              className="w-full max-w-sm rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  