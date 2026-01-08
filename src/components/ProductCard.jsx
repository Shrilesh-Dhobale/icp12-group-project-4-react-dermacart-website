import React from 'react'
import products from '../views/products.js'
import {BG_color,Hero_BG_color,Primary_color,Main_Text_color,Sub_Headers_color}from '../views/app.js'

function ProductCard({products}) {
  return (
    
        <div key={products.id} className="bg-white rounded-lg shadow-md p-4 w-84">
          <img src={products.img} alt={products.name} className="w-full h-68 object-cover rounded-md mb-2" />
          <h3 className="text-lg font-semibold">{products.name}</h3>
          <p className="text-gray-600">{products.description}</p>
          <p className="text-green-600 font-bold">₹{products.price}</p>
        </div>
    
  )
}

export default ProductCard
