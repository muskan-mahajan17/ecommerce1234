import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    console.log("CARD PRODUCT:", product)
  
    return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

    <Link to={`/products/${product.id}`}>
   
    <img 
    src={product.thumbnail} 
    className="w-full h-56 object-cover"
    />

    <div className="p-4">
    <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
    <p className="mt-2 text-xl font-bold">${product.price}</p>

    </div>
    </Link>

    </div>
)
}

export default ProductCard