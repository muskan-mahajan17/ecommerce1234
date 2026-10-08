import React from 'react'
import { Link, Links } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex-items-center px-6"> {/*Website ka main hero section*/}

      <div className="max-w-7xl mx-auto w-full"> {/*Mian content vala container*/}

        <div className="grid md:grid-cols-2 gap-10 items-center"> {/*Hero section divided into 2 columns*/}

          <div>   {/*left side*/}
       {/* Website ka main heading*/}
        <h1 className="text-5xl font-bold">Shop Everything You Love</h1>

       {/* Short description*/}
        <p classname="mt-4 text-lg text-gray-600">Discover amazing products at great prices.</p>

        {/* Main action button*/}
        <Link to="/products" className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg">Shop Now</Link>
             </div>

        <div>  {/* Right side*/}
          <div className="flex justify-center">

            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="" className="w-full mx-w-md h-96 object-cover rounded-2xl shadow-lg"/>
            </div>
            </div>

        </div>
       </div>
    </div>
  )
}

export default Home
    