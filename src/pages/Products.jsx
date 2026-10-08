import React, { useEffect, useState } from 'react'
import { getProducts } from "../services/api";
import ProductCard from '../components/ProductCard';

const Products = () => {

  const [products, setProducts] = useState([])       //API se aye products ko store karne ke liye state
  const [searchTerm, setSearchTerm] = useState('')    // search input me user jo type krega usko store krne ke liye 
  const [selectedCategory, setSelectedCategory] = useState('all')        // selected category ko store krne ke liye
  const [sortOption, setSortOption] = useState('default')                //product ko kis order me store krna hai, ye store krega

useEffect(()=>{       //component load hone ke baad API call krne ke liye useEffect
   const fetchProducts = async()=>{

    try{
    const data = await getProducts();       //API se products ka data fetch kar rhe hai
      setProducts(data.products);           //API ke products ko state me store kar rhe hai
   } catch (error){
    console.log("API Error:",error)     // API call fail hone par error console me show hoga
   }
  }

   fetchProducts(); // function call
}, []);
       
       // products me available unique categories nikal rhe hai 
      const categories=[...new Set(products.map((product)=> product.category))]     // set- removes duplicate categories

      // according to both search & category , products are filtered  
      const filteredProducts = products.filter((product)=>{
        
          const matchesSearch = product.title       // product title search term se match kr rha hai ya nhi 
          .toLowerCase()
          .includes(searchTerm.toLowerCase())         

          const matchesCategory =        // product selected category se match kr rha hai ya nhi 
          selectedCategory ==='all'||
          product.category === selectedCategory   

           return matchesSearch && matchesCategory         // dono conditions true hone par product show hoga      
        })

        const sortedProducts= [...filteredProducts].sort((a,b)=> {
          // price low to high
          if(sortOption === 'price-low'){
            return a.price - b.price
          }

          // price high to low
          if(sortOption === 'price-high'){
            return b.price - a.price
          }

          // default order
          return 0
        })

        

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900"> All Products</h1>
        <p className="mt-2 mb-8 text-gray-600">Explore our collection of products</p>

        <div className="mb-8 max-w-md">
          <input       //Search 
          type="text"
          placeholder="Search products..."
          value={searchTerm}          //input ki current value ko searchTerm ke sath connect krta hai 
          onChange={(e)=> setSearchTerm(e.target.value)}       //user input me kuch type krega(e.target.value) us typed textko lega(setSearchTerm()) state update krega
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none "/>
        </div>

        <div className="mb-8 max-w-md">  
          <select
          value={selectedCategory}
          onChange={(e)=> setSelectedCategory(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="all">     {/*all products dikhane ke liye default option */}
              All Categories
            </option>

            {categories.map((category)=>(

              <option key={category} vlaue={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div classname="mb-8 max-w md">

          <select 
          value={sortOption}
          onChange={(e)=> setSortOption(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
          >
           <option value="default" >
            Sort By
           </option>

           <option value="price-low">
            Price: Low to High
           </option>

           <option value="price-high">
            Price: High to Low
           </option>

          </select>
        </div>


       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/*Products array ke har product par map chlega */}
        {sortedProducts.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
       </div>
    </div>
  )
}

export default Products